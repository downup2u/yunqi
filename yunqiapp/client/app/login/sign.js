var dict = new ReactiveDict()

dict.setDefault('isLoading', false)

Schemas.SignInForm = new SimpleSchema({
  username: {
    type: String,
      label: '用户名'
  },
  password: {
    type: String,
    label: '密码',
  }
});

Schemas.SignInForm.messages({
  'regEx': 'You have invalid characters in your [label]',
  invalidLogin: '无效的用户名或密码',
  "invalid-username": "Invalid username",
  "invalid-password": "Invalid password",
  alreadyExists: "A user account already exists for this email address. If this is you, you may want to sign in instead. Otherwise, please check your spelling and try again.",
  userNotFound: "用户不存在",
  incorrectPassword: "密码错误",
  passwordNotSet: "You have not yet set a password. Please visit the link in the e-mail we sent you."

});

Template.signIn.helpers({
  isLoading: function () {
    return dict.get('isLoading')
  },
  fieldErrors: function () {
    var context = Schemas.SignInForm.namedContext('SignInForm')
    return _.reduce(context.invalidKeys(), function (memo, errObj) {
      memo.push(context.keyErrorMessage(errObj.name))
      return memo
    }, [])
  }
});
//https://github.com/aldeed/meteor-autoform/issues/212
//AutoForm.setDefaultTemplate('ionic');
AutoForm.hooks({
  SignInForm: {
    onSubmit: function (doc) {
      dict.set('isLoading', true)
      var form = this
      Meteor.loginWithPassword(doc.username, doc.password, function (error) {
        dict.set('isLoading', false);
        form.done(error)
      })     
      return false
    },
    onSuccess: function (operation, result, template){
      Router.go('/profile')
    },
    onError: function (operation, error, template){
     
        var vc = AutoForm.getValidationContext("SignInForm");
        
        if (typeof error.reason === 'string') {
          if (error.reason.indexOf('Email already exists') !== -1) {
            vc.addInvalidKeys([{name: 'username', type: 'alreadyExists'}]);
          } else if (error.reason.indexOf('User not found') !== -1) {
            vc.addInvalidKeys([{name: 'username', type: 'userNotFound'}]);
          }else{
            vc.addInvalidKeys([{name: 'username', type: 'invalidLogin'}]);
          }
        }
     
    }
  }
});
