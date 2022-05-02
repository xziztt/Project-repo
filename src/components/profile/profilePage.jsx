import './profile.css'
import React from 'react';
import {doc,getDoc,setDoc,updateDoc} from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import { db,storage } from '../firebase/firebase_config';
import { useState,useEffect } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {ref,uploadBytes,getDownloadURL} from "firebase/storage";
import { useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase_config';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import { NavBarLoggedIn } from '../navbar/navbar';

const uidTest = "TrXyYhuFyYgx7usXE5ZCCffT0n82";
const uidXd="2afkLHp76kUL0DfxNq6Z5iiqOtG2";


export function ProfilePage() {
    const navigate = useNavigate();
    const location = useLocation();
    //const authToken = location.state.authToken;


    const imageToBlob = async() => {

    }

    //used to upload profile picture to firestore storage and return link
    const getImageUrl = async() => {
        try{
        const mountainsImageRef = ref(storage,'someone');
        console.log(profileImage)
        console.log("uploading image");
        const val = await uploadBytes(mountainsImageRef, profileImage).then((snapshot) => {
            setProfileImageUrl(snapshot.getDownloadURL());
          });
        }
        catch(error){
            console.log(error);
        }
        
    }


    const logout = async() => {

        signOut(auth).then(() => {
            navigate("/new-login");
        }).catch((error) => {
            alert(error);
        }); 
    }
    //used to update new info if already exists info
    const updateUserInfo = async() => {
        try{
            const docRef = doc(db,"userInfo",uid);
            console.log("here no error")
            console.log(addressLine2)
            const user = await updateDoc(docRef,{
                isProfileUpdated:"true",
                userId:uid,
                firstName: firstName,
                lastName: lastName,
                email:email,
                phoneNumber:phoneNumber,
                addressLine1:addressLine1,
                addressLine2:addressLine2,
                city:city,
                pinCode:pinCode,
                region:region,
                country:country,
            });
            alert("Profile updated successfully")
        }
        catch(error){
            addNewUserInfoToDatabase()
            console.log(error);
        }
    }


    //used to add new user entry if doesnt already exists

    const addNewUserInfoToDatabase = async() => { 
        try{
            console.log("here" + uid)
            console.log("adding to firestore")
            console.log(firstName + " " + lastName)
            const docRef = doc(db,"userInfo",uid);
            const user = await setDoc(docRef,{
                isProfileUpdated:"true",
                userId:uid,
                firstName: firstName,
                lastName: lastName,
                email:email,
                phoneNumber:phoneNumber,
                addressLine1:addressLine1,
                addressLine2:addressLine2,
                city:city,
                pinCode:pinCode,
                region:region,
                country:country,                
            });
            console.log(user.user)
            
        }
        catch(error){
            console.log(error)
            alert(error)
        }
    }


    //used to get data from the database
    const getDataFromDatabase = async (uid) => {
        console.log("loading data from database");

        const docRef = doc(db,"userInfo",uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const user = docSnap.data();
            setUserId(user.userId);
            console.log(user);
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
            setPhoneNumber(user.phoneNumber);   
            setAddressLine1(user.addressLine1);
            setAddressLine2(user.addressLine2);
            setPinCode(user.pinCode);
            setCity(user.city);
            setCountry(user.country);
            setRegion(user.region);
            setRegisterDate(user.registerDate);
            if(user.profileImageUrl != ""){
                setProfileImageUrl(user.profileImageUrl);
            }
        }
        else{
            console.log("no such document");
        }
    }

    const uploadImage = () => {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
          // you can use this method to get file and perform respective operations
                  let files =   Array.from(input.files);
                  setProfileImage(files);
                  getImageUrl();
              };
        input.click();
    }

    //state variables
    const [uid,setUid] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [userId,setUserId] = useState('');
    const [email,setEmail] = useState('');
    const [country,setCountry] = useState('');
    const [region,setRegion] = useState('');
    const [city,setCity] = useState('');
    const [addressLine1,setAddressLine1] = useState('');
    const [addressLine2,setAddressLine2] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [pinCode,setPinCode] = useState('');
    const [profileImageUrl,setProfileImageUrl] = useState("https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg");
    const [profileImage,setProfileImage] = useState(null);
    const [registerDate,setRegisterDate] = useState('');



    //useEffect used to trigger something on every re-render
    useEffect(() => {
        console.log("loading info")
        onAuthStateChanged(auth, (user) => {
        if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log("user logged in");
        const uid = user.uid;
        console.log(uid);
        setUid(uid);
        getDataFromDatabase(uid);
    // ...
    } else {
        console.log("Error");
    }
});
     },[uid]);//[] is the dependency array. since it is null, useEffect only exec first time
    return (
        <div>
            <NavBarLoggedIn></NavBarLoggedIn>
    <div  class="container rounded bg-white mt-5 mb-5 bodyDiv" >
        
      <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"></link>
      <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
      <script src="https://code.jquery.com/jquery-migrate-1.4.1.min.js"></script>
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">{firstName} {lastName}</span><span class="text-black-50">{email}</span><span> </span></div>
            <div class="mt-5 text-center"><button onClick={uploadImage} class="btn btn-primary profile-button" type="file">Upload Image</button></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">FirstName</label><input type="text" value={firstName} class="form-control" placeholder="first name"/></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" value={lastName} class="form-control"  placeholder="surname"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" defaultValue = {phoneNumber} onChange={(event)=>{setPhoneNumber(event.target.value)}}/></div>
                    <div class="col-md-12"><label class="labels">Address Line 1*</label><input type="text" class="form-control" placeholder="enter address line 1" defaultValue = {addressLine1} onChange={(event)=>{setAddressLine1(event.target.value)}}/></div>
                    <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" defaultValue={addressLine2}  onChange={(event)=>{setAddressLine2(event.target.value)}}/></div>
                    <div class="col-md-12"><label class="labels">Pincode*</label><input type="text" class="form-control" placeholder="Pincode" defaultValue={pinCode} onChange={(event)=>{setPinCode(event.target.value)}} /></div>
                    <div class="col-md-12"><label class="labels">City*</label><input type="text" class="form-control" placeholder="City" defaultValue={city} onChange={(event)=>{setCity(event.target.value)}}/></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value = {email} /></div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Country</label><CountryDropdown class ="form-control" value={country}  onChange={(val) => setCountry(val)} /></div>
                    
                    <div class="col-md-6"><label class="labels">State/Region</label><RegionDropdown class="form-control" country={country} value={region} onChange={(val) => setRegion(val)} /></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={()=>updateUserInfo()}>Save Profile</button></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="col-md-12"><label class="labels"></label>Topics Covered: </div> <br/>
                <ProgressBar now={60} />
                <div class="col-md-12"><label class="labels"></label>Date Registered: <span style={{fontWeight:""}}>{registerDate}</span> </div><br/>
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""/></div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={()=>logout()}>Logout</button></div>
            </div>
        </div>
    </div>
</div>
</div>

);
}