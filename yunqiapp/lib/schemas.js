Schemas = {}
Schemas.Mixins = {}

Schemas.Mixins.username = {
  type: String,
  label: '用户名',
}

Schemas.Mixins.createdAt = {
  type: Date,
  autoValue: function() {
    if (this.isInsert) {
      return new Date;
    } else if (this.isUpsert) {
      return {$setOnInsert: new Date};
    }
  }
}

Schema = {};
Schema.Order = new SimpleSchema({
    deliveryaddress: {
        type: String,
        label: "送气地址",
    },
    contactname: {
        type: String,
        label: "联系人"
    },
    contacttel: {
        type: String,
        label: "联系电话",
    },
    wanttime: {
        type: String,
        label: "要气时间",
         autoform: {
      afFieldInput: {
        type: "datetime-local"
      }
    }
    },
    yunqimemo: {
        type: String,
        label: "备注",
    },
    paytype: {
        type: String,
        label: "支付方式",
        autoform: {
          type: "select-radio",
         options: function () {
            return [
              {label: "货到付款", value: 0},
              {label: "支付宝", value: 1},
            ];
        }
    }
    },
});