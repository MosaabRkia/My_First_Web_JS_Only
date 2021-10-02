debugger

//props
var usename = null;
var Password = null;
var RegPsw = null;
var RegUsr = null;
var CurRegPsw = null;
var RegEmail = null;
var RegAdress = null;
var streetReg = null;
var ProfImg = null;
var bdayReg = null;
var RegPhoneNum = null;
var RegFulNam = null;
var srcimage = null;
var codeofuser = null;

//user admin
if (localStorage.getItem('oneloaddata') != 1) {
    oneloaddata();
}
function oneloaddata() {
    for (let index = 0; index < 1; index++) {
        localStorage.setItem('oneloaddata', 1);
        localStorage.setItem('srcimage0', "")
        localStorage.setItem('RegFirNam0', "Mosaab");
        localStorage.setItem('RegLasNam0', "Abo Rkia");
        localStorage.setItem('RegPhoneNum0', "050-7909888");
        localStorage.setItem('bdayReg0', "15/02/1999");
        localStorage.setItem("streetReg0", "Miser Street 00");
        localStorage.setItem("RegPsw0", "MyPassword");
        localStorage.setItem("RegUsr0", "MosaabRkia");
        localStorage.setItem("RegEmail0", "aborkiamosaab@gmail.com");
        localStorage.setItem("CurRegPsw0", "MyPassword");
        localStorage.setItem("RegAdress0", "Miser Village");
        localStorage.setItem('counter', 0);
        localStorage.setItem('Rank0', "Admin");
        localStorage.setItem('score0', 0);
    }
}

// on click login button
function onclicklogin() {
    var booltocheck = false;
    let counterforlogin = parseInt(localStorage.getItem('counter'));

    for (let index = 0; index <= counterforlogin; index++) {
        if (document.getElementById('Usr').value == localStorage.getItem("RegEmail" + index) || document.getElementById('Usr').value == localStorage.getItem("RegUsr" + index) && document.getElementById('Psw').value == localStorage.getItem("RegPsw" + index)) {
            localStorage.setItem('loginnednumber', index);
            booltocheck = true;
            if (localStorage.getItem('Rank' + index) === "Admin") {
                document.getElementById("Button_L").style.backgroundColor = "green";
                document.getElementById("Button_L").innerHTML = "successfully login";
                document.getElementById("Button_L").style.fontSize = "30px";
                
                setTimeout(
                    function () {
                        document.getElementById("Button_L").style.fontSize = "13.3333px ";
                        document.getElementById("Button_L").innerHTML = "login";
                        document.getElementById("Button_L").style.backgroundColor = "rgb(255, 145, 0)";
                        loadpage('ListUsersAdminPage.html');
                    }, 3000);  
            }
            else {
                localStorage.setItem('loginnednumber', index);
                document.getElementById("Button_L").style.backgroundColor = "green";
                document.getElementById("Button_L").innerHTML = "successfully login";
                document.getElementById("Button_L").style.fontSize = "30px";
        setTimeout(
            function () {
                document.getElementById("Button_L").style.fontSize = "13.3333px ";
                document.getElementById("Button_L").innerHTML = "login";
                document.getElementById("Button_L").style.backgroundColor = "rgb(255, 145, 0)";
                loadpage('Profile_Page.html');
            }, 3000); 
            }

        }
    }
    // if booltocheck is false to change the button
    if (booltocheck == false) {
        document.getElementById("Button_L").style.backgroundColor = "red";
        document.getElementById("Button_L").innerHTML = "Wrong Email Or UserName Or Password";
        document.getElementById("Button_L").style.fontSize = "17px";
        //13.3333px 
        setTimeout(
            function () {
                document.getElementById("Button_L").style.fontSize = "13.3333px ";
                document.getElementById("Button_L").innerHTML = "login";
                document.getElementById("Button_L").style.backgroundColor = "rgb(255, 145, 0)";
            }, 3000); 
    }
}



///////////////////Register//////////////////////
function forregister() { 
    // new counter here
    let newcounter = parseInt(localStorage.getItem('counter'));
    newcounter++;
    // set item counter as new counter
    localStorage.setItem('counter', newcounter);
    // set as member 
    localStorage.setItem('Rank' + newcounter, "Member");
    //get the image src 
    srcimage = document.getElementById('Profile_Photo').src;
    localStorage.setItem('srcimage' + newcounter, srcimage);
    //get the First name and last name
    RegFirNam = document.getElementById('RegFirNam').value;
    localStorage.setItem('RegFirNam' + newcounter, RegFirNam);
    RegLasNam = document.getElementById('RegLasNam').value;
    localStorage.setItem('RegLasNam' + newcounter, RegLasNam);
    //get the phone number
    RegPhoneNum = document.getElementById('RegPhoneNum').value;
    localStorage.setItem('RegPhoneNum' + newcounter, RegPhoneNum);
    // get the date
    bdayReg = document.getElementById('Birthday_Bar').value;
    localStorage.setItem('bdayReg' + newcounter, bdayReg);
    // get the street number
    streetReg = document.getElementById('streetReg').value;
    localStorage.setItem("streetReg" + newcounter, streetReg);
    // get the password
    RegPsw = document.getElementById('RegPsw').value;
    localStorage.setItem("RegPsw" + newcounter, RegPsw);
    // get the username
    RegUsr = document.getElementById('RegUsr').value;
    localStorage.setItem("RegUsr" + newcounter, RegUsr);
    // get the email
    RegEmail = document.getElementById('RegEmail').value;
    localStorage.setItem("RegEmail" + newcounter, RegEmail);
    // get the current password
    CurRegPsw = document.getElementById('CurRegPsw').value;
    localStorage.setItem("CurRegPsw" + newcounter, CurRegPsw);
    // get the address
    RegAdress = document.getElementById('RegAdress').value;
    localStorage.setItem("RegAdress" + newcounter, RegAdress);
    //create a score localstorage for the user
    localStorage.setItem('score' + newcounter, 100);
    // if its not empty boxes
    if (srcimage == "" || RegFirNam == "" || RegLasNam == "" || RegPhoneNum == "" || bdayReg == "" || streetReg == "" || RegPsw == "" || RegUsr == "" || RegEmail == "" || CurRegPsw == "" || RegAdress == "") {
        document.getElementById("Button_R").style.backgroundColor = "red";
        document.getElementById("Button_R").innerHTML = "Please Fill All Boxes";
        document.getElementById("Button_R").style.fontSize = "30px";
        //13.3333px 
        setTimeout(
            function () {
                document.getElementById("Button_R").style.fontSize = "13.3333px ";
                document.getElementById("Button_R").innerHTML = "Register";
                document.getElementById("Button_R").style.backgroundColor = "rgb(255, 145, 0)";
            }, 1000*3);

        //remove the user that added 
        localStorage.setItem('counter', newcounter - 1);
    }
    // if any box stay null
    else if (srcimage == null || RegFirNam == null || RegLasNam == null || RegPhoneNum == null || bdayReg == null || streetReg == null || RegPsw == "" || RegUsr == null || RegEmail == null || CurRegPsw == null || RegAdress == null) {
        document.getElementById("Button_R").style.backgroundColor = "red";
        document.getElementById("Button_R").innerHTML = "Please Fill All Boxes";
        document.getElementById("Button_R").style.fontSize = "30px";
        setTimeout(
            function () {
                document.getElementById("Button_R").style.fontSize = "13.3333px";
                document.getElementById("Button_R").innerHTML = "Register";
                document.getElementById("Button_R").style.backgroundColor = "rgb(255, 145, 0)";
            }, 3000);
            
        //remove the user that added 
        let newcounter = parseInt(localStorage.getItem('counter'));
        localStorage.setItem('counter', newcounter - 1);
        location.reload();
    }
    // if passwords not the same
    else if (RegPsw != CurRegPsw) {
        document.getElementById("Button_R").style.backgroundColor = "red";
        document.getElementById("Button_R").innerHTML = "OPS ITS NOT SAME PASSWORD PLEASE RE ENTER PASSWORD";
        document.getElementById("Button_R").style.fontSize = "18px"; 
        setTimeout(
            function () {
                document.getElementById("Button_R").style.fontSize = "13.3333px";
                document.getElementById("Button_R").innerHTML = "Register";
                document.getElementById("Button_R").style.backgroundColor = "rgb(255, 145, 0)";
            }, 3000);
            
        //remove the user that added 
        localStorage.setItem('counter', newcounter - 1);
    }
    // username check to not clone
    else if (checkifalreadyused(newcounter) == false) {
        localStorage.setItem('counter', newcounter - 1);
    }
    else {
        localStorage.setItem('counter', parseInt(localStorage.getItem('counter')));
        document.getElementById("Button_R").style.backgroundColor = "green";
        document.getElementById("Button_R").innerHTML = "Successfully Registered";
        document.getElementById("Button_R").style.fontSize = "18px";
        setTimeout(
            function () {
                document.getElementById("Button_R").style.fontSize = "13.3333px";
                document.getElementById("Button_R").innerHTML = "Register";
                document.getElementById("Button_R").style.backgroundColor = "rgb(255, 145, 0)";
                location.reload();
            }, 3000);
    }

}
function changecss_Register() {
    // tittle of login
    document.getElementById("titles").style.marginTop = "0px";
    document.getElementById("tittle_login").style.marginTop = "0px";
    document.getElementById("tittle_login").style.fontSize = "30px";
    document.getElementById("tittle_login").style.webkitTransitionDuration = "0.7s";
    /*  --------------------------------------------------------------------  */
    // form of register
    document.getElementById("Register_Form").style.display = "block";
    document.getElementById("Register_Form").style.visibility = "visible";
    document.getElementById("Register_Form").style.width = "816px";
    document.getElementById("Register_Form").style.height = "952px";
    /*  --------------------------------------------------------------------  */
    //form of login
    document.getElementById("Login_Form").style.marginTop = "0px";
    document.getElementById("Login_Form").style.marginBottom = "0px";
    document.getElementById("Login_Form").style.width = "0px";
    document.getElementById("Login_Form").style.height = "0px";
    document.getElementById("Login_Form").style.visibility = "hidden";
    /*  --------------------------------------------------------------------  */
    // tittle register
    document.getElementById("titles").style.marginTop = "0px";
    document.getElementById("tittle_register").style.fontSize = "90px";
    document.getElementById("tittle_register").style.marginTop = "0px";
    document.getElementById("tittle_register").style.webkitTransitionDuration = "0.7s";
}



//////////////////////////////////login///////////////////////////////////////

// change of css 
function changecss_Login() {
    document.getElementById("Login_Form").style.display = "block";
    document.getElementById("Login_Form").style.transition = "opacity 2s linear";
    document.getElementById("Login_Form").style.opacity = "1";
    document.getElementById("Login_Form").style.width = "816px";
    document.getElementById("Login_Form").style.height = "214.800px";
    document.getElementById("Login_Form").style.visibility = "visible";

    /*  --------------------------------------------------------------------  */
    // form of register
    document.getElementById("titles").style.marginTop = "0px";
    document.getElementById("Register_Form").style.marginTop = "0px";
    document.getElementById("Register_Form").style.marginBottom = "0px";
    document.getElementById("Register_Form").style.visibility = "hidden";
    document.getElementById("Register_Form").style.width = "0px";
    document.getElementById("Register_Form").style.height = "0px";
    document.getElementById("Register_Form").style.display = "none";
    /*  --------------------------------------------------------------------  */
    // tittle of login

    document.getElementById("tittle_login").style.marginTop = "0px";
    document.getElementById("tittle_login").style.fontSize = "90px";
    document.getElementById("tittle_login").style.webkitTransitionDuration = "0.7s";
    /*  --------------------------------------------------------------------  */
    // tittle register
    document.getElementById("tittle_register").style.marginTop = "40px";
    document.getElementById("tittle_register").style.fontSize = "30px";
    document.getElementById("tittle_register").style.webkitTransitionDuration = "0.7s";
}

//////////////////////////////////////////////////profile page///////////////////////////////////////////////////

//change css on click profile tittle
function changecss_Profile() {
    //admin checker
    ifadmin();
    // calculator the 3 top less moves score
    top3();

    document.getElementById("towerHD").style.height = "320px";
    document.getElementById("Button_Profile_Photo").style.height = "102px";
    document.getElementById("Button_Profile_Photo").style.width = "350px";
    document.getElementById("Button_Profile_Photo").style.marginTop = "0%";
    document.getElementById("Button_Profile_Photo").style.fontSize = "40px";
    document.getElementById("Button_Profile_Photo").style.webkitTransitionDuration = "0.7s";
    document.getElementById("Button_Profile_Photo").style.border = "none";
    document.getElementById("tableofprofile").style.visibility = "visible";
    document.getElementById("tableofprofile").style.marginTop = "0px";
    document.getElementById("Button_Profile_Photo").style.backgroundColor = "rgba(255, 255, 255, 0.493)";
    document.getElementById("Button_Profile_Photo").style.color = "black";
    document.getElementById("Button_Profile_Photo").style.borderRadius = "50%";
    document.getElementById("Button_Profile_Photo").style.marginBottom = "20px";
}
//on double click
function changecssDBL_Profile() {
    document.getElementById("towerHD").style.height = "320px";
    document.getElementById("Button_Profile_Photo").style.marginTop = "230px";
    document.getElementById("Button_Profile_Photo").style.fontSize = "75px";
    document.getElementById("Button_Profile_Photo").style.webkitTransitionDuration = "0.7s";
    document.getElementById("Button_Profile_Photo").style.border = "none";
    document.getElementById("tableofprofile").style.visibility = "hidden";
    document.getElementById("Button_Profile_Photo").style.backgroundColor = "rgba(255, 255, 255, 0)";
    document.getElementById("Button_Profile_Photo").style.color = "white";
    document.getElementById("Button_Profile_Photo").style.borderRadius = "50%";
}

/////////////////////////update details /////////////////////////////////
//update email
function UpdateEmail() {
    if (document.getElementById('OldEmail').value != localStorage.getItem('RegEmail' + parseInt(localStorage.getItem('loginnednumber'))))
     {
       document.getElementById("savebuttonEmail").style.backgroundColor = "red";
       document.getElementById("savebuttonEmail").value = "Old Email is not Right";
       document.getElementById("savebuttonEmail").style.fontSize = "18px"; 
      setTimeout(
           function () {
           location.reload();
           }, 3000);
    }
    else {
        if (document.getElementById('OldEmail').value == localStorage.getItem('RegEmail' + parseInt(localStorage.getItem('loginnednumber')))) {
            localStorage.setItem("RegEmail+" + parseInt(localStorage.getItem('loginnednumber')), "");
            localStorage.setItem("RegEmail" + parseInt(localStorage.getItem('loginnednumber')), document.getElementById('NewEmail').value);
            
            document.getElementById("savebuttonEmail").style.backgroundColor = "green";
            document.getElementById("savebuttonEmail").value = "Successfully To Update Email";
            document.getElementById("savebuttonEmail").style.fontSize = "18px";
            setTimeout(
                function () {
                    location.href = 'Edit_Profile.html';
                }, 3000);
        }
    }
}


//update password
function UpdatePassword() {
    if (document.getElementById('OldPassword').value != localStorage.getItem('RegPsw' + parseInt(localStorage.getItem('loginnednumber')))) 
    {
      document.getElementById("savebuttonpassword").style.backgroundColor = "red";
      document.getElementById("savebuttonpassword").value = "Old Password is not Right";
      document.getElementById("savebuttonpassword").style.fontSize = "18px"; 
      setTimeout(
          function () {
              location.reload();
          }, 3000);
    }
    else {
        if (document.getElementById('OldPassword').value == localStorage.getItem('RegPsw' + parseInt(localStorage.getItem('loginnednumber')))) {
            localStorage.setItem("RegPsw" + parseInt(localStorage.getItem('loginnednumber')), "");
            localStorage.setItem("RegPsw" + parseInt(localStorage.getItem('loginnednumber')), document.getElementById('NewPassword').value);

          document.getElementById("savebuttonpassword").style.backgroundColor = "green";
          document.getElementById("savebuttonpassword").value = "Successfully To Update Password";
          document.getElementById("savebuttonpassword").style.fontSize = "18px";
          setTimeout(
              function () {
                location.href = 'Edit_Profile.html';
              }, 3000);
       
        }
    }
}
// update details regular if its not empty or null so change it
function UpdateDetails() {
    //UpdateFirstName
    if (document.getElementById('UpdateFirstName').value != null && document.getElementById('UpdateFirstName').value != "") {
        localStorage.setItem("RegFirNam" + parseInt(localStorage.getItem('loginnednumber')), "");
        localStorage.setItem("RegFirNam" + parseInt(localStorage.getItem('loginnednumber')), document.getElementById('UpdateFirstName').value);
    }
    //UpdateLastName
    if (document.getElementById('UpdateLastName').value != null && document.getElementById('UpdateLastName').value != "") {
        localStorage.setItem("RegLasNam" + parseInt(localStorage.getItem('loginnednumber')), "");
        localStorage.setItem("RegLasNam" + parseInt(localStorage.getItem('loginnednumber')), document.getElementById('UpdateLastName').value);
    }
    //UpdatePhoneNumber
    if (document.getElementById('UpdatePhoneNumber').value != null && document.getElementById('UpdatePhoneNumber').value != "") {
        localStorage.setItem("RegPhoneNum" + parseInt(localStorage.getItem('loginnednumber')), "");
        localStorage.setItem("RegPhoneNum" + parseInt(localStorage.getItem('loginnednumber')), document.getElementById('UpdatePhoneNumber').value);
    }
    //UpdateAddress
    if (document.getElementById('UpdateAddress').value != null && document.getElementById('UpdateAddress').value != "") {
        localStorage.setItem("RegAdress" + parseInt(localStorage.getItem('loginnednumber')), "");
        localStorage.setItem("RegAdress" + parseInt(localStorage.getItem('loginnednumber')), document.getElementById('UpdateAddress').value);
    }
    //UpdateStreet
    if (document.getElementById('UpdateStreet').value != null && document.getElementById('UpdateStreet').value != "") {
        localStorage.setItem("streetReg" + parseInt(localStorage.getItem('loginnednumber')), "");
        localStorage.setItem("streetReg" + parseInt(localStorage.getItem('loginnednumber')), document.getElementById('UpdateStreet').value);
    }
    //UpdateUserName
    if (document.getElementById('UpdateUserName').value != null && document.getElementById('UpdateUserName').value != "") {
        localStorage.setItem("RegUsr" + parseInt(localStorage.getItem('loginnednumber')), "");
        localStorage.setItem("RegUsr" + parseInt(localStorage.getItem('loginnednumber')), document.getElementById('UpdateUserName').value);
    }
    //UpdateBirthDay
    if (document.getElementById('UpdateBirthDay').value != null && document.getElementById('UpdateBirthDay').value != "") {
        localStorage.setItem("bdayReg" + parseInt(localStorage.getItem('loginnednumber')), "");
        localStorage.setItem("bdayReg" + parseInt(localStorage.getItem('loginnednumber')), document.getElementById('UpdateBirthDay').value);
    }

   document.getElementById("savebutton").style.backgroundColor = "green";
   document.getElementById("savebutton").value = "Successfully To Update Details";
   document.getElementById("savebutton").style.fontSize = "18px";
   setTimeout(
       function () {
           location.reload();
       }, 3000);
}

// to pages functions
// to edit password page
function ToEditPasswordPage() {
    location.href = "Password_Edit.html";
}
function ToEditEmailPage() {
    location.href = "Email_Edit.html";
}
function ToEditProfilePicturePage() {
    location.href = "Photo_Edit.html";
}

//function to load the old localstorage as placeholder to know the customer what was details
function loadtheplaceholder()
 {
    document.getElementById("UpdateFirstName").placeholder =  `FirstName : ` + localStorage.getItem(`RegFirNam` + parseInt(localStorage.getItem('loginnednumber')));
    document.getElementById("UpdateLastName").placeholder = ` LastName : ` +localStorage.getItem(`RegLasNam` + parseInt(localStorage.getItem('loginnednumber')));
    document.getElementById("UpdateUserName").placeholder = `UserName : ` +localStorage.getItem(`RegUsr` + parseInt(localStorage.getItem('loginnednumber')));
    document.getElementById("UpdatePhoneNumber").placeholder = `PhoneNumber : ` +localStorage.getItem(`RegPhoneNum` + parseInt(localStorage.getItem('loginnednumber')));
    document.getElementById("UpdateBirthDay").placeholder = `BirthDay : ` +localStorage.getItem(`bdayReg` + parseInt(localStorage.getItem('loginnednumber')));
    document.getElementById("UpdateAddress").placeholder = `Address : ` +localStorage.getItem(`RegAdress` + parseInt(localStorage.getItem('loginnednumber')));
    document.getElementById("UpdateStreet").placeholder = `Street : ` +localStorage.getItem(`streetReg` + parseInt(localStorage.getItem('loginnednumber')));
}


//load photo
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('Profile_Photo').src = e.target.result
        }
        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}
// set link to the photo
function setLink(element) {
    document.getElementById('test').src = localStorage.getItem('srcimage' + parseInt(localStorage.getItem('loginnednumber')));
}
// set link to the photo of admin edit page
function setLinkForAdmin(element) {
    document.getElementById('PhotoToChange').src = localStorage.getItem('srcimage' + parseInt(localStorage.getItem('AdminEditId')));
}




//load admin page 
function loadthepageadmin() {
    // loop to check all users
    for (let index = 0; index <= parseInt(localStorage.getItem('counter')); index++) {
        localStorage.setItem('idphotoforadminpage', index);
        // prop to create a raw for user
        var profileraw = `<tr id="Raw${index}">
    <td>
    <img id="photo${index}" style="width: 100px; height: 100px; ">
    <script>
    document.getElementById('photo'+parseInt(localStorage.getItem('idphotoforadminpage'))).src = localStorage.getItem('srcimage'+ parseInt(localStorage.getItem('idphotoforadminpage')));
    </script>
    </td>
    <td>
    <script>
    document.write(localStorage.getItem('RegFirNam'+${index}));
    </script>
    </td>
       <td>
       <script>
       document.write(localStorage.getItem('RegLasNam'+${index}));
       </script>
    </td>
    <td>  
    <script>
     document.write(localStorage.getItem('RegPhoneNum'+${index}));
     </script>
    </td>
    <td>
    <script>
    document.write(localStorage.getItem('RegAdress'+${index}));
    </script>
    </td>
    <td>
    <script>
    document.write(localStorage.getItem('streetReg'+${index}));
    </script>
    </td>
    <td>
    <script>
    document.write(localStorage.getItem('RegUsr'+${index}));
    </script>
    </td>
    <td>
    <script>
    document.write(localStorage.getItem('bdayReg'+${index}));
    </script>
    </td>
    <td>
    <script>
    document.write(localStorage.getItem('RegEmail'+${index}));
    </script>
    </td>
    <td>
    <script>
    document.write(localStorage.getItem('RegPsw'+${index}));
    </script>
    </td>
    <td>
    <button id="Edit_Button${index}" onclick="onclickeditbuttonAdmin(this.id)" > Edit Profile </button>
    </td>
    <td>
    <button id="Remove_Button${index}" onclick="RemoveUser(this.id)" > Remove Profile </button>
    </td>
    </tr>`;
// if its not deleted already
        if (localStorage.getItem('RegFirNam' + index) != null &&
            localStorage.getItem('RegLasNam' + index) != null &&
            localStorage.getItem('RegPhoneNum' + index) != null &&
            localStorage.getItem('RegAdress' + index) != null &&
            localStorage.getItem('streetReg' + index) != null &&
            localStorage.getItem('RegUsr' + index) != null &&
            localStorage.getItem('bdayReg' + index) != null &&
            localStorage.getItem('RegPsw' + index) != null)
            {
             //show it
            document.write(profileraw);
            }
    }
}

// exits the numbers from any word
function checknumber(ID) {
    let newnumber = 0;
    let double = 1;
    for (let index = ID.length; index > 0; index--) {
        if (parseInt(ID[index]) >= 0 && ID[index] <= 9) {
            newnumber += (parseInt(ID[index])) * double;
            double *= 10;
        }
    }
    return newnumber;
}

// remove user in admin page
function RemoveUser(idname) {
 let IdNum = checknumber(idname);

    // remove the image src 
    localStorage.removeItem('srcimage' + IdNum);

    //remove the First name and last name
    localStorage.removeItem('RegFirNam' + IdNum);
    localStorage.removeItem('RegLasNam' + IdNum);

    //remove the phone number
    localStorage.removeItem('RegPhoneNum' + IdNum);

    // remove the date
    localStorage.removeItem('bdayReg' + IdNum);

    // remove the street number
    localStorage.removeItem('streetReg' + IdNum);

    // remove the password
    localStorage.removeItem('RegPsw' + IdNum);

    // remove the username
    localStorage.removeItem('RegUsr' + IdNum);

    // remove the email
    localStorage.removeItem('RegEmail' + IdNum);

    // remove the current password
    localStorage.removeItem('CurRegPsw' + IdNum);

    // remove the address
    localStorage.removeItem('RegAdress' + IdNum);
loadpage('ListUsersAdminPage.html');
    setTimeout(() => {
        document.getElementById("Raw" + IdNum).style.display = "none";
    }, 3000);
// if was the user of admin (Mosaab) so reset the details
    if (IdNum == 0) {
        localStorage.setItem('oneloaddata', 1);
        localStorage.setItem('srcimage0', "");
        localStorage.setItem('RegFirNam0', "Mosaab");
        localStorage.setItem('RegLasNam0', "Abo Rkia");
        localStorage.setItem('RegPhoneNum0', "050-7909888");
        localStorage.setItem('bdayReg0', "15/02/1999");
        localStorage.setItem("streetReg0", "Miser Street 00");
        localStorage.setItem("RegPsw0", "MyPassword");
        localStorage.setItem("RegUsr0", "MosaabRkia");
        localStorage.setItem("RegEmail0", "aborkiamosaab@gmail.com");
        localStorage.setItem("CurRegPsw0", "MyPassword");
        localStorage.setItem("RegAdress0", "Miser Village");
        localStorage.setItem('Rank0', "Admin");
        localStorage.setItem('score0', 0);
    }
}
// get the number of user who want to edit by admin
function onclickeditbuttonAdmin(element) {
    localStorage.setItem('AdminEditId', checknumber(element))
    loadpage('Edit_Profile_Admin.html');
}



//foradminedit
function onloadbodyadminedit() {
    let ID = localStorage.getItem('AdminEditId');
    document.getElementById('PhotoToChange').src = localStorage.getItem('srcimage' + parseInt(localStorage.getItem('AdminEditId')));
    document.getElementById("UpdateFirstName").placeholder = `First Name : `+ localStorage.getItem(`RegFirNam` + ID);
    document.getElementById("UpdateLastName").placeholder = `Last Name : `+localStorage.getItem(`RegLasNam` + ID);
    document.getElementById("UpdateUserName").placeholder = `UserName : `+localStorage.getItem(`RegUsr` + ID);
    document.getElementById("UpdatePhoneNumber").placeholder = `Phone Number : `+localStorage.getItem(`RegPhoneNum` + ID);
    document.getElementById("UpdateBirthDay").placeholder = `BirthDay : `+localStorage.getItem(`bdayReg` + ID);
    document.getElementById("UpdateAddress").placeholder = `Address : `+localStorage.getItem(`RegAdress` + ID);
    document.getElementById("UpdateStreet").placeholder = `Street : `+localStorage.getItem(`streetReg` + ID);
    document.getElementById("UpdateEmailAdmin").placeholder =`Email : `+ localStorage.getItem(`RegEmail` + ID);
    document.getElementById("UpdatePasswordAdmin").placeholder = `Password : `+localStorage.getItem(`RegPsw` + ID);
}
// same of regular save changes but for admin 
function onclicksaveadmin() {
    let IdNum = localStorage.getItem('AdminEditId');
    if (document.getElementById('Profile_Photo').src != null && document.getElementById('Profile_Photo').src != "") {
        localStorage.setItem("srcimage" + IdNum, "");
        localStorage.setItem("srcimage" + IdNum, document.getElementById('Profile_Photo').src);
    }
    if (document.getElementById('UpdateFirstName').value != null && document.getElementById('UpdateFirstName').value != "") {
        localStorage.setItem("RegFirNam" + IdNum, "");
        localStorage.setItem("RegFirNam" + IdNum, document.getElementById('UpdateFirstName').value);
    }
    if (document.getElementById('UpdateLastName').value != null && document.getElementById('UpdateLastName').value != "") {
        localStorage.setItem("RegLasNam" + IdNum, "");
        localStorage.setItem("RegLasNam" + IdNum, document.getElementById('UpdateLastName').value);
    }
    if (document.getElementById('UpdatePhoneNumber').value != null && document.getElementById('UpdatePhoneNumber').value != "") {
        localStorage.setItem("RegPhoneNum" + IdNum, "");
        localStorage.setItem("RegPhoneNum" + IdNum, document.getElementById('UpdatePhoneNumber').value);
    }
    if (document.getElementById('UpdateAddress').value != null && document.getElementById('UpdateAddress').value != "") {
        localStorage.setItem("RegAdress" + IdNum, "");
        localStorage.setItem("RegAdress" + IdNum, document.getElementById('UpdateAddress').value);
    }
    if (document.getElementById('UpdateStreet').value != null && document.getElementById('UpdateStreet').value != "") {
        localStorage.setItem("streetReg" + IdNum, "");
        localStorage.setItem("streetReg" + IdNum, document.getElementById('UpdateStreet').value);
    }
    if (document.getElementById('UpdateUserName').value != null && document.getElementById('UpdateUserName').value != "") {
        localStorage.setItem("RegUsr" + IdNum, "");
        localStorage.setItem("RegUsr" + IdNum, document.getElementById('UpdateUserName').value);
    }
    //UpdateBirthDay
    if (document.getElementById('UpdateBirthDay').value != null && document.getElementById('UpdateBirthDay').value != "") {
        localStorage.setItem("bdayReg" + IdNum, "");
        localStorage.setItem("bdayReg" + IdNum, document.getElementById('UpdateBirthDay').value);
    }
    if (document.getElementById('UpdateEmailAdmin').value != null && document.getElementById('UpdateEmailAdmin').value != "") {
        localStorage.setItem("RegEmail" + IdNum, "");
        localStorage.setItem("RegEmail" + IdNum, document.getElementById('UpdateEmailAdmin').value);
    }
    if (document.getElementById('UpdatePasswordAdmin').value != null && document.getElementById('UpdateBirthDay').value != "") {
        localStorage.setItem("RegPsw" + IdNum, "");
        localStorage.setItem("RegPsw" + IdNum, document.getElementById('UpdatePasswordAdmin').value);
    }

document.getElementById('savebutton').value = "Successfully To Update Details";
document.getElementById('savebutton').style.backgroundColor = "green"
    loadpage('ListUsersAdminPage.html');
}
//change photo of user 
function onchangephoto() {
    var newsrcimage = document.getElementById('Profile_Photo').src;
    localStorage.setItem('srcimage' + localStorage.getItem('loginnednumber'), "");
    localStorage.setItem('srcimage' + localStorage.getItem('loginnednumber'), newsrcimage);
    document.getElementById("savebutton").style.backgroundColor = "green";
   document.getElementById("savebutton").value = "Successfully Photo Changed";
   document.getElementById("savebutton").style.fontSize = "18px";
   setTimeout(
       function () {
           location.href = 'Edit_Profile.html';
       }, 3000);

}


//////////////////////////////loading////////////////////////////////////
// loading function
function loadpage(link) {
    localStorage.removeItem('golink');
    localStorage.setItem('golink', link);
    location.href = "Loading_Page.html";
}  

//check less moves of all users get value and id of them
function top3(){
    let firstplace = 100;
    let secondplace=100;
    let thirdplace=100;
    let numberidof1=null;
    let numberidof2=null;
    let numberidof3=null;

if(parseInt(localStorage.getItem('counter'))>=0)
    for (let index = 0; index <= parseInt(localStorage.getItem('counter')) ; index++) {
        let tocheck = parseInt(localStorage.getItem('score' + index));
        if (tocheck < firstplace) {
            numberidof3 = numberidof2;
            numberidof2 = numberidof1;
            numberidof1 = index;
            
            thirdplace = secondplace;
            secondplace=firstplace;
          firstplace =  tocheck;
        }
       else if (tocheck < secondplace) {
        numberidof3 = numberidof2;
        numberidof2 = index;

           thirdplace = secondplace;
            secondplace =  tocheck;
          }
     else{
         if(tocheck < thirdplace)
         numberidof3 = index;

        thirdplace =  tocheck;
     }    
         
    }
 if (parseInt(localStorage.getItem('counter')) == 0 ) {
    localStorage.setItem('top1',"Name : &_"+localStorage.getItem('RegFirNam'+numberidof1)+"_& Moves :"+firstplace);
    localStorage.setItem('top2',"there are only 1 registered account");
    localStorage.setItem('top3',"there are only 1 registered account");
 }
 else if (parseInt(localStorage.getItem('counter')) == 1 ) {
    localStorage.setItem('top1',"Name : &_"+localStorage.getItem('RegFirNam'+numberidof1)+"_& Moves :"+firstplace);
    localStorage.setItem('top2',"Name : &_"+localStorage.getItem('RegFirNam'+numberidof2)+"_& Moves :"+secondplace);
    localStorage.setItem('top3',"there are only 2 registered account");
 }
 else{
      localStorage.setItem('top1',"Name : &_"+localStorage.getItem('RegFirNam'+numberidof1)+"_& Moves :"+firstplace);
    localStorage.setItem('top2',"Name : &_"+localStorage.getItem('RegFirNam'+numberidof2)+"_& Moves :"+secondplace);
    localStorage.setItem('top3',"Name : &_"+localStorage.getItem('RegFirNam'+numberidof3)+"_& Moves :"+thirdplace);
 }
}
// exit and reset game buttons the slidedown if not slideup unable to click any thing
function exitandrestartgame(locationtogo){
    $('.won').slideUp();
    loadpage(locationtogo);
}

//if admin function check if admin (the user) to show button of the edit all profiles
function ifadmin(){
    if (localStorage.getItem('Rank'+parseInt(localStorage.getItem('loginnednumber')))=="Admin") {
        document.getElementById('X2').style.visibility= "visible";
    }
    else{
   if (!(document.getElementById('X2').style.visibility= "hidden")) {    
    document.getElementById('X2').style.visibility= "hidden";
    }}
}

function checkifalreadyused(weworkon){
   let i = localStorage.getItem('counter');
    for (let index = 0; index < i; index++) {
        //check for the reg phone
        if (localStorage.getItem('RegPhoneNum'+index) == localStorage.getItem('RegPhoneNum'+ weworkon)) {
            document.getElementById("Button_R").style.backgroundColor = "red";
       document.getElementById("Button_R").innerHTML = "The Phone Number is Already Used";
       document.getElementById("Button_R").style.fontSize = "18px"; 
       setTimeout(
        function () {
            document.getElementById("Button_R").style.fontSize = "13.3333px ";
            document.getElementById("Button_R").innerHTML = "Register";
            document.getElementById("Button_R").style.backgroundColor = "rgb(255, 145, 0)";
        }, 1000*3);
        return false;
    }
    //check for the reg email
    if (localStorage.getItem('RegEmail'+index) == localStorage.getItem('RegEmail'+ weworkon)) {
   document.getElementById("Button_R").style.backgroundColor = "red";
   document.getElementById("Button_R").innerHTML = "The Email is Already Used";
   document.getElementById("Button_R").style.fontSize = "18px"; 
   setTimeout(
    function () {
        document.getElementById("Button_R").style.fontSize = "13.3333px ";
        document.getElementById("Button_R").innerHTML = "Register";
        document.getElementById("Button_R").style.backgroundColor = "rgb(255, 145, 0)";
    }, 1000*3);
    return false;
}
// check for username if clone
if (localStorage.getItem('RegUsr'+index) == localStorage.getItem('RegUsr'+ weworkon)) {
    document.getElementById("Button_R").style.backgroundColor = "red";
document.getElementById("Button_R").innerHTML = "The UserName is Already Used";
document.getElementById("Button_R").style.fontSize = "18px"; 
setTimeout(
function () {
    document.getElementById("Button_R").style.fontSize = "13.3333px ";
    document.getElementById("Button_R").innerHTML = "Register";
    document.getElementById("Button_R").style.backgroundColor = "rgb(255, 145, 0)";
}, 1000*3);
return false;
}
}
return true;
}