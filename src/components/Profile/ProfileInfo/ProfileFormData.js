import React from 'react';
import{CreateField,Input} from './../../common/FormsContols/FormsControls.js';

const ProfileDataForm = ({ profile }) => {
    return <form>
        <div><button onClick={gotoEditMode}></button></div>
        <div>
            Full Name:{CreateField("Full Name", "fullName", [], Input)}
        </div>

        <div>
            looking for a job:{profile.lookingForAJob ? 'yes' : 'no'}
        </div>

        {profile.lookingForAJob &&
            <div>My Professional skills:{profile.lookingForAJobDescription}</div>
        }

        <div>
            About me:{profile.aboutMe}
        </div>

        <div>
            Contacts:{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
        </form>
}
export default ProfileDataForm;