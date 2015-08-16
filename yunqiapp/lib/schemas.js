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