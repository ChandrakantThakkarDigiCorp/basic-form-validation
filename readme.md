## basic-form-validation
#### Author: Chandrakant Thakkar
##### Created on: 21st Dec 2016

---
###### This is javascript basic form validation reusable module.Using this you can apply various validation on form elements like input,select,e.t.c.

###### This form is depended on jQuery.So,import latest jQuery file.
---
##### _Validation supported by basic-form-validation_
###### 1. required
###### 2. onlydigitwithdot
###### 3. onlydigit
###### 4. onlyalphabet
###### 5. onlyalphabetwithspace
###### 6. size(*)
###### 7. email


#### How to Use ? Let's start

* _import latest jQuery and formValidation.js file in HTML page:_

```javascript
<script src="js/jquery-1.12.2.min.js"></script>
<script src="js/formValidation.js"></script>
```

---

* _Add form element into your page with proper ID:_

```javascript
// CBT:added HTML form element with ID "validationForm"
<form id="validationForm" action="" method="post">
...
</form>
```
---
* _Add form element with "validation" attribute:_

###### "validation" attribute contains list of required validations seperated by comma(,).note that here "validation" attribute must require to check validation.

```javascript
<input type="text" id="empName" validation="required,onlyalphabetwithspace" class="form-control">
```
###### Here,"empName" element has two validations.First one it's value is required and second only accept alphabets with space allowed value.
---
* _Add span element after form element to show auto validation message:_

###### Here, "id" should contain name same as form element you added with postfix string "_validation" as shown bellow.

```javascript
<span type="text" id="empName_validation" class="validationFormControl" style="display:none;"><span>
```
---
* _Call formValidation() method with form id to check all validations on form elements:_

###### This method returns true if all validations are satishfied else returns false.
```javascript
//CBT:called formValidation() with form ID is "validationForm"
formValidation('validationForm');
```
---

* _To reset all form elements call resetFormWithValidation() method with form ID:_

###### This method reset all form element's value and remove validation messages.
```javascript
//CBT:called resetFormWithValidation() with form ID is "validationForm"
resetFormWithValidation('validationForm')
```
---


### <a href='https://rawgit.com/ChandrakantThakkarDigiCorp/basic-form-validation/master/index.html' target='_blank'>Click Here To See Output</a>
