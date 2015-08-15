Schemas = {}
Schemas.Mixins = {}

Schemas.Mixins.username = {
  type: String,
  label: '用户名',
  regEx: /^[a-zA-Z0-9]+$/,
  max: 20
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