//
class Authentication {
  userName: string;
  password: string;
  accessToken: string;
}


class BusinessProfileModel {
  profileId: string;
  userName: string;
  businessName: string;
  displayName: string;
  email: string;
  phoneNumber: string;
}

class PersonalProfileModel {
  profileId: string;
  userName: string;
  firstName: string;
  familyName: string;
  displayName: string;
  email: string;
  phoneNumber: string;
}


class WorkmodelsModel {
  workmodelId: string;
  createdBy: string;
  ownedBy: string;
  createDate: string;
  modifiedDate: string;
  thumbnail: string;
}

let businessProfiles: BusinessProfileModel[] = [
  {
    profileId: 'xxxx-xxxx-xxxx-xxxx',
    userName: 'emijo',
    businessName: 'Gachon',
    displayName: 'Gachon Univ.',
    email: 'hola@hola.com',
    phoneNumber: '00-0000-0000'
  }
];

let personalProfiles: PersonalProfileModel[] = [
  {
    profileId: 'xxxx-xxxx-xxxx-xxxx',
    userName: 'emijo',
    firstName: 'Emilio Jose',
    familyName: 'Coronado Lopez',
    displayName: 'My Nick',
    email: 'hola@hola.com',
    phoneNumber: '00-0000-0000'
  },
  {
    profileId: 'xxxx-xxxx-xxxx-xxxx',
    firstName: 'Nacho',
    userName: 'emijo',
    familyName: 'Martinez',
    displayName: 'My Nick2',
    email: 'hola@hola.com',
    phoneNumber: '00-0000-0000'
  },
  {
    profileId: 'xxxx-xxxx-xxxx-xxxx',
    userName: 'emijo',
    firstName: 'Pedro',
    familyName: 'Abad',
    displayName: 'My Nick3',
    email: 'hola@hola.com',
    phoneNumber: '00-0000-0000'
  },
  {
    profileId: 'xxxx-xxxx-xxxx-xxxx',
    userName: 'emijo',
    firstName: 'Juan',
    familyName: 'Perez',
    displayName: 'My Nick4',
    email: 'hola@hola.com',
    phoneNumber: '00-0000-0000'
  }
];
