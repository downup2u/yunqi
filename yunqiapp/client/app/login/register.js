var dict = new ReactiveDict()

dict.setDefault('isLoading', false)

Schemas.SignUpForm = new SimpleSchema({
  username: Schemas.Mixins.username,
  phone: {
    label: '手机号',
    type: String,
    autoform: {
      afFieldInput: {
        type: "tel"
      }
    }
  },
  password: {
    type: String,
    min: 6,
    label: '密码',
  },
  passwordConfirmation: {
    type: String,
    min: 6,
    label: '确认新密码',
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "passwordMismatch"
      }
    }
  }
});

Schemas.SignUpForm.messages({
  'notUnique': 'The [label] you provided is already registered',
  'regEx': 'You have invalid characters in your [label]',
  'passwordMismatch': "密码不匹配"
});

Template.register.helpers({
  isLoading: function () {
    return dict.get('isLoading')
  },
  fieldErrors: function () {
    var context = Schemas.SignUpForm.namedContext('SignUpForm')
    return _.reduce(context.invalidKeys(), function (memo, errObj) {
      memo.push(context.keyErrorMessage(errObj.name))
      return memo
    }, [])
  }
});

AutoForm.hooks({
  SignUpForm: {
    beginSubmit: function () {
      dict.set('isLoading', true)
    },
    onSuccess: function (operation, result, template) {
      Meteor.loginWithPassword(result.username, result.password, function (error) {
        dict.set('isLoading', false)
        if(!error){
          Router.go('/')
        }else{

        }
      })     
    },
    onError: function (operation, error, template) {
      dict.set('isLoading', false)
      var context = Schemas.SignUpForm.namedContext('SignUpForm');
      if (error.error === 'field-validation') {
        context.addInvalidKeys(error.details)
      }
    }
  }
});
