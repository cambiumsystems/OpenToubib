import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select';
import { CountryDropdown, RegionDropdown} from 'react-country-region-selector';
//import "bootstrap/dist/css/bootstrap.min.css";

type UserSubmitForm = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  acceptTerms: boolean;
  //address: string;
  //city: string;
  description: string;
  fee: number;
  //secretQuest: number;
 //rdv_gap: number;
 //country:string;
 specialities:Array<string>;
};
 let specialities:any[]= ['Gastro','Pneumo', 'Psychiatrie' , 'Orl','Dermato','Ophtalmo' ,'Généraliste']
 let cities:any[]= [{value: 'Rennes', label: "Rennes"},{value:'Paris', label:"Paris"},
 {value: 'Lyon', label: "Lyon"} , {value: 'Antibes', label: "Antibes"} ,{value: 'Toulouse', label: "Toulouse"},{value: 'Nantes', label: "Nantes"}]
 const Login: React.FC = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    gender : Yup.string().required('Must choose at least one option.'),
    //address : Yup.string().required('Address is required'),
    //city : Yup.string().required('city is required'),
    //country : Yup.string().required('country is required'),
    //secretQuest: Yup.number().required('Address is required'),
    fee: Yup.number().required('Fee is required'),
    description: Yup.string().required('Description is required'),
    //rdv_gap: Yup.number().required('RDV gap is required'),
    //specialities: Yup.array().required('Select at least One Speciality'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="register-form">
      <Link style={{position: "absolute", top: "0px",left: "0px",}} to="/">Go back to home</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='float-child'>
        <div className="form-group" >
          <label>Full Name</label>
          <input
            type="text"
            {...register('fullname')}
            className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
          </div>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                {...register('username')}
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.username?.message}</div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                {...register('password')}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              />
              <span className="invalid-feedback">{errors.password?.message}</span>
              <div>
              <label>Confirm Password</label>
              <input
                type="password"
                {...register('confirmPassword')}
                className={`form-control ${
                  errors.confirmPassword ? 'is-invalid' : ''
                }`}
              />
              <div className="invalid-feedback">
                {errors.confirmPassword?.message}
              </div>
              </div>
            </div>

            <div className="form-group">
            <label>Please Select Gender</label>
            <div className="form-group">
              <label>
                <input type='radio'
                  value='Male'
                  {...register('gender')}
                />
                Male
              </label>
            </div>
            <div className="form-group">
              <label >
                <input type='radio' {...register('gender')}
                  value="Female"
                  />
                Female
              </label>
            </div>
            <div className="invalid-feedback">{errors.gender?.message}</div>
          </div>

          <div className="form-group form-check">
          <input
            type="checkbox"
            {...register('acceptTerms')}
            className={`form-check-input ${
              errors.acceptTerms ? 'is-invalid' : ''
            }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
          </div>
        </div>
        <div className='float-child'>
            <div className="form-group" >
          <label>Description</label>
          <textarea
            {...register('description')}
            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.description?.message}</div>
          </div>

            <div className="form-group">
              <label>Fee</label>
              <input
                type="number"
                {...register('fee')}
                className={`form-control ${errors.fee? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.fee?.message}</div>
            </div>
            <Multiselect
            isObject={false}
            {...register('specialities')}
              options={specialities}
            />
            <CountryDropdown
               value={country}
               onChange={(val) => setCountry(val)}
               />
            <RegionDropdown
              country={country}
               value={region}
               onChange={(val) => setRegion(val)}
               />
            <Select options={cities} />





        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
          </div>
      </form>
    </div>
  );
}
export default Login;
