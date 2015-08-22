#!/bin/bash
BASEPATH=$(cd `dirname $0`;pwd)
NODEFILENAME=node-v0.10.35-linux-x64
rm $NODEFILENAME -rf
tar -zxvf $NODEFILENAME.tar.gz 
sudo ln -s ${BASEPATH}/$NODEFILENAME/bin/node /usr/sbin/node
sudo ln -s ${BASEPATH}/$NODEFILENAME/bin/npm /usr/sbin/npm
