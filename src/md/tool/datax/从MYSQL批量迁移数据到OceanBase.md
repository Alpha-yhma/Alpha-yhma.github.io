---
title: 从MYSQL批量迁移数据到OceanBase
icon: fab fa-markdown
tag: DataX
---
## 目录结构

- mig.sh
- template.json
- als
  - env.txt
  - tables.txt

## mig.sh
```shell
#!/bin/bash  
if [ -z "$1" ]; then  
  echo '请输入需要导入的目录地址！'  
  exit  
fi  
  
dir=$(cd $(dirname $0); pwd)  
cd $dir  
  
# 检查env.txt文件是否存在  
ls $1 | grep env.txt | grep -V grep  
if [ $? -ne 0 ]; then  
  echo '指定目录下没有env.txt文件，请检查！'  
  exit  
fi  
# 检查tables.txt文件是否存在  
ls $1 | grep tables.txt | grep -V grep  
if [ $? -ne 0 ]; then  
  echo '指定目录下没有tables.txt文件，请检查！'  
  exit  
fi  
  
DATAX_HOME='/home'  
# 设置需要进行模板替换的变量  
source $1/env.txt  
  
buildDir=$1/build  
logDir=$1/log  
rm -rf $buildDir $logDir  
mkdir $buildDir $logDir  
# 读取需要其按哦已的数据表集合，进行模板变量替换  
while read table  
do  
file_text=$(< ./template.json)  
eval "cat <<EOF  
$file_text  
EOF" > $buildDir/$table.json  
done < $1/tables.txt  
  
# ---------------------------多线程处理---------------------------  
# 线程数量  
threads=10  
# mkfifo 创建有名管道  
myfifo="/tmp/migfd"  
rm -rf $myfifo  
mkfifo $myfifo  
# 创建文件描述符，以可读（<）和可写（>）关联管道文件  
exec 2<>$myfifo  
rm -rf $myfifo  
  
# 为文件描述符创建占位信息  
for ((i=0;i<${threads};i++))  
do  
  echo >&2  
done  
# ---------------------------多线程处理---------------------------  
  
# 根据变量startTable判断是否需要跳过开头的某些表，用于断点续跑  
skip=1  
if [ -z "$startTable" ]; then  
  skip=0  
fi  
# 开始表数据迁移  
for table in `cat $1/tables.txt`  
do  
  # 跳过已经迁移成功的表  
  if [ $skip -eq 1 ]; then  
    if [ "$table" == "$startTable" ]; then  
      skip=0  
    else  
      echo "---------------------------跳过表：${table}---------------------------"  
    fi  
  fi  
  read -u2  
  {  
    echo "---------------------------开始迁移表：${table}---------------------------"  
    python $DATAX_HOME/bin/datax.py $buildDir/$table.json 2>&1 > $logDir/$table.log  
    if [ $? -ne 0 ]; then  
      echo "---------------------------迁移表：${table}失败！---------------------------"  
    fi  
    echo "---------------------------迁移表：${table}结束---------------------------"  
    echo >&2  
  }&  
done  
  
wait  
# 关闭文件描述符的读写  
exec 2<&-  
exec 2>&-
```

## template.json
```json
{  
  "core": {  
    "transport": {  
      "channel": {  
        "speed": {  
          "byte": 10485760  
        }  
      }  
    }  
  },  
  "job": {  
    "settings": {  
      "speed": {  
        "channel": 4,  
        "byte": 52428800  
      },  
      "errorLimit": {  
        "record": 0,  
        "percentage": 0.1  
      }  
    },  
    "content": [  
      {  
        "reader": {  
          "name": "mysqlreader",  
          "parameter": {  
            "username": "${read_username}",  
            "password": "${read_password}",  
            "column": ["*"],  
            "connection": [  
              {  
                "table": ["${table}"],  
                "jdbcUrl": [  
                  "${read_url}"  
                ]  
              }  
            ]  
          }  
        },  
        "writer": {  
          "name": "oceanbasev10writer",  
          "parameter": {  
            "obWriteMode": "insert",  
            "column": ["*"],  
            "preSql": ["truncate table ${table}"],  
            "connection": [  
              {  
                "table": ["${table}"],  
                "jdbcUrl": "${write_url}"  
              }  
            ],  
            "username": "${write_username}",  
            "password": "${write_password}",  
            "writeThreadCount": 10,  
            "batchSize": 1000,  
            "memstoreThreshold": 0.9  
          }  
        }  
      }  
    ]  
  }  
}
```

## env.txt
```properties
# 源数据库jdbc URL  
read_url=jdbc:mysql://20.15.71.68:3306/als93cdev?useUnicode=true&characterEncoding=utf-8&serverTimezone=GMT%2B8  
# 源数据库登录用户名  
read_username=root  
# 源数据库登录密码  
read_password=amarsoft  
# 目标数据库jdbc URL  
write_url=jdbc:oceanbase://20.14.133.11:2883/CREDIT?useLocalSessionState=true&allowBatch=true&allowMultiQueries=true&rewriteBatchedStatements=true  
# 目标数据库登录用户名  
write_username=CREDIT@dev_crcsdb#testcluster  
# 目标数据库登录密码  
write_password=CREDIT@@abcd1234  
# 从哪张表开始迁移，用于断点续跑  
startTable=
```

## tables.txt
```
business_apply  
customer_info

```
