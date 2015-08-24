#!/bin/bash
BASEPATH=$(cd `dirname $0`;pwd)
NODEFILENAME=node-v0.12.7-linux-x64
rm $NODEFILENAME -rf
tar -zxvf $NODEFILENAME.tar.gz 
rm /usr/sbin/node
rm /usr/sbin/npm
sudo ln -s ${BASEPATH}/$NODEFILENAME/bin/node /usr/sbin/node
sudo ln -s ${BASEPATH}/$NODEFILENAME/bin/npm /usr/sbin/npm
