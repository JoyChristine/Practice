function validatedate(inputText)
  {
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  // Match the date format through regular expression
  if(inputText.value.match(dateformat))
  {
    document.form1.text1.focus();
    //Test which seperator is used '/' or '-'
    var slash = inputText.value.split('/');
    var hyphen = inputText.value.split('-');
    slash = slash.length;
    hyphen = hyphen.length;
    // Extract the string into month, date and year
    if (slash>1)
      {
        var enteredDate = inputText.value.split('/');
    }
    else if (hyphen>1)
      {
        var enteredDate = inputText.value.split('-');
    }

    var dd = parseInt(enteredDate[0]);
    var mm  = parseInt(enteredDate[1]);
    var yy = parseInt(enteredDate[2]);

    // array list of days 
    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    if (mm==1 || mm>2) 
    {
    elif (dd>ListofDays[mm-1])
    {
      alert('Invalid date format!');
      return false;
    }
    }
    if (mm==2)
    {
      // Leap year
      var leapYear = false;
      if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
      {
        leapYear = true;
      }
      if ((leapYear==false) && (dd>=29))
      {
        alert('Please Enter your correct Birthday!');
        return false;
      }
      if ((leapYear==true) && (dd>29))
      {
        alert('Please Enter your correct Birthday!');
        return false;
      }
    }
  }
  else
  {
    alert("Please Enter your correct Birthday!");
    document.form1.text1.focus();
    return false;
  }
 
}











