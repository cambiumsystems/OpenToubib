/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  Stepper,
  InputLabel
} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { TimePicker, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useEffect, useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import * as Yup from 'yup';
const model = require('../db');

export let secretKey=null;




 const sleep = (time) => new Promise((acc) => setTimeout(acc, time));
const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' },
};
const validationSchemaStep1 = Yup.object().shape({
  firstName: Yup.string().required('Firstname is required'),
  lastName: Yup.string()
    .required('Lastname is required')
    .min(6, 'Lastname must be at least 6 characters')
    .max(20, 'Lastname must not exceed 20 characters'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,40}$/,
      'Must at least Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  gender: Yup.string().required('Must choose at least one option.'),
  // secretQuest: Yup.string().required('Must choose at least one question.'),
  answerScrtQuest: Yup.string().required('Answer required.'),
  dobDay: Yup.number()
    .required('Day required')
    .min(1, 'Day not valid')
    .max(31, 'Day not valid'),
  dobMonth: Yup.number()
    .required('Month required')
    .min(1, 'Month not valid')
    .max(12, 'Month not valid'),
  dobYear: Yup.number()
    .required('Year required')
    .min(1990, 'Year not valid')
    .max(2003, 'Year not valid'),
});
const validationSchemaStep2 = Yup.object().shape({
  country: Yup.string().required('Country is required'),
  region: Yup.string().required('Region is required'),
  city: Yup.string()
    .required('City is required')
    .min(3, 'Few characters! enter a valid city'),
  officeName: Yup.string()
    .required('Name required')
    .min(6, 'few characters! Enter a valid name'),
  postalCode: Yup.string()
    .required('Postal Code is required')
    .min(4, 'Must be at least 4 Digits')
    .max(10, 'Must not exceed 10 Digits'),
  address: Yup.string()
    .required('Adress required')
    .min(3, 'Your full address please!'),
});
const validationSchemaStep3 = Yup.object().shape({
  professionalID: Yup.string()
    .required('Required!')
    .min(5, 'Must be at least 5 digits')
    .max(16, 'Must be less than 16 digits'),
  minFee: Yup.number()
    .required('Min Fee required')
    .min(10, 'Too low!')
    .max(150, 'Too high'),
  maxFee: Yup.number()
    .required('Max Fee required')
    .max(150, 'Too high')
    .moreThan(Yup.ref('minFee'), 'Higher than min fee please!'),
  minTeleFee: Yup.number().when('teleconsultation', {
    is: true,
    then: Yup.number().required(),
    otherwise: Yup.number()
      .min(0, 'No teleconsultation')
      .max(0, 'No teleconsultation'),
  }),
  maxTeleFee: Yup.number().when('teleconsultation', {
    is: true,
    then: Yup.number().required(),
    otherwise: Yup.number()
      .min(0, 'No teleconsultation')
      .max(0, 'No teleconsultation'),
  }),
  // speciality: Yup.string().required('Required!'),
  description: Yup.string()
    .required('Description required')
    .min(50, 'too short'),
});
const validationSchemaStep5 = Yup.object().shape({
  privateKey: Yup.number().when('teleconsultation', {
    is: true,
    then: Yup.number().required(),
  }),
  // .min(15, 'Must be at least 15 digits')
  // .max(16, 'Must be less than 16 digits'),
  publicKey: Yup.number().when('teleconsultation', {
    is: true,
    then: Yup.number().required(),
  }),
});
const specialities = [
  { value: 'Gastro', label: 'Gastro' },
  { value: 'Pneumo', label: 'Pneumo' },
  { value: 'Psychiatrie', label: 'Psychiatrie' },
  { value: 'Orl', label: 'Orl' },
  { value: 'Dermato', label: 'Dermato' },
  { value: 'Ophtalmo', label: 'Ophtalmo' },
  { value: 'Généraliste', label: 'Généraliste' },
];
const secretQuests = [
  { value: '0', label: 'What was your first pet?' },
  { value: '1', label: 'What was the model of your first car?' },
  { value: '3', label: 'In what city does your nearest sibling live?' },
  { value: '4', label: 'What was your childhood nickname?' },
  { value: '5', label: 'In what city or town was your first job?' },
  {
    value: '6',
    label: 'What is the name of the place your wedding reception was held?',
  },
];
const rdvGaps = ['15', '20', '25', '30', '35', '40'];

let country: string;
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Home() {
  // const notify = () => toast("Wow so easy !");
  const [flag1, setFlag1] = React.useState(true);
  const [flag2, setFlag2] = React.useState(true);
  const [selectedtimeMM, setSelectedtimeMM] = useState();
  const [selectedtimeMAf, setSelectedtimeMAf] = useState(null);

  const [selectedtimeTM, setSelectedtimeTM] = useState(null);
  const [selectedtimeTAf, setSelectedtimeTAf] = useState(null);

  const [selectedtimeWM, setSelectedtimeWM] = useState(null);
  const [selectedtimeWAf, setSelectedtimeWAf] = useState(null);

  const [selectedtimeThM, setSelectedtimeThM] = useState(null);
  const [selectedtimeThAf, setSelectedtimeThAf] = useState(null);

  const [selectedtimeFM, setSelectedtimeFM] = useState(null);
  const [selectedtimeFAf, setSelectedtimeFAf] = useState(null);

  const [selectedtimeSM, setSelectedtimeSM] = useState(null);
  const [selectedtimeSAf, setSelectedtimeSAf] = useState(null);

  const handleClick1 = () => {
    setFlag1(!flag1);
    setFlag2(true);
  };
  const handleClick2 = () => {
    setFlag2(!flag2);
    setFlag1(true);
  };
  const [disabledM, setDisabledM] = useState(true);
  const [disabledT, setDisabledT] = useState(true);
  const [disabledW, setDisabledW] = useState(true);
  const [disabledTh, setDisabledTh] = useState(true);
  const [disabledF, setDisabledF] = useState(true);
  const [disabledS, setDisabledS] = useState(true);

  const handleChange = (e, setDisabled) => {
    let isChecked = e.target.checked;
    setDisabled(!isChecked);
  }
  const handleChangeMM = (e,time) => {
    setSelectedtimeMM(time);
    //console.log(e,time);
    console.log(selectedtimeMM);
  }

  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const { t, i18n } = useTranslation();
  return (
    <Card>
      <CardContent>
        {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
        <FormikStepper
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            teleconsultation: false,
            minFee: 0,
            maxFee: 0,
            minTeleFee: 0,
            maxTeleFee: 0,
            description: '',
            password: '',
            confirmPassword: '',
            gender: '',
            acceptTerms: false,
            address: '',
            city: '',
            secretQuest: '',
            answerScrtQuest: '',
            rdvGap: '',
            country: '',
            region: '',
            officeName: '',
            speciality: '',
            professionalID: '',
            phoneNumber: '',
            postalCode: '',
            dobDay: '',
            dobMonth: '',
            dobYear: '',
            privateKey: '',
            publicKey: '',
            isDistantNode: false,
            days: [],
            morningTime: [],
          }}
          onSubmit={async (values) => {
            console.log('values', values);
          }}
        >
          <FormikStep
            label={t('form.step1')}
            // validationSchema={validationSchemaStep1}
          >
            <Snackbar open={open} onClose={handleClose}>
              <Alert onClose={handleClose} severity="info">
                Informations personnelles basiques
              </Alert>
            </Snackbar>
            <Box paddingBottom={2}>
              <Field
                name="firstName"
                component={TextField}
                label={t('form.firstName')}
                style={{ marginLeft: '50px', width: '200px' }}
              />
              <Field
                name="lastName"
                component={TextField}
                label={t('form.lastName')}
                style={{ marginLeft: '50px' }}
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="email"
                component={TextField}
                label="Email"
                // placeholder="doctor@example.com"
                style={{ marginLeft: '50px', width: '450px' }}
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                name="password"
                component={TextField}
                label={t('form.password')}
                type="password"
                style={{ marginLeft: '50px', width: '200px' }}
              />
              <Field
                name="confirmPassword"
                component={TextField}
                label="Confirm Password"
                type="password"
                style={{ marginLeft: '50px' }}
              />
            </Box>
            <Box paddingBottom={2}>
              <div className="wrapper">
                <div className="select_size one">
                  <br />
                  <Field
                    variant="outlined"
                    name="secretQuest"
                    component={SelectComponent}
                    placeholder={t('form.secretQuest')}
                    label={t('form.secretQuest')}
                    options={secretQuests}
                    style={{ marginLeft: '50px', width: '80px' }}
                  />
                </div>
                <div className="two">
                  {' '}
                  <Field
                    name="answerScrtQuest"
                    component={TextField}
                    label="Answer"
                    type="password"
                    style={{ marginLeft: '10px' }}
                  />
                </div>
              </div>
              <Alert severity="info" className="alert">
                Cette question est votre seul moyen pour récupérer votre mot de
                passe!
              </Alert>
            </Box>
              <Field
                name="gender"
                component={ButtonGroup}
                type="button"
                variant="contained"
                buttons={[t('form.female'), t('form.male')]}
                // onClick={handleClick1}
                // color={flag1 ? 'default' : 'primary'}
                style={{ marginLeft: '50px' }}
              />
            <Field
              name="dobDay"
              component={TextField}
              label={t('form.day')}
              type="number"
              placeholder="DD"
              style={{ marginLeft: '90px', width: '60px' }}
            />
            <Field
              name="dobMonth"
              component={TextField}
              label={t('form.month')}
              style={{ marginLeft: '10px', width: '65px' }}
              type="number"
              placeholder="MM"
            />
            <Field
              name="dobYear"
              component={TextField}
              label={t('form.year')}
              style={{ marginLeft: '10px', width: '100px' }}
              type="number"
              placeholder="YYYY"
            />
            <Box paddingBottom={2}>
              <Field
                name="teleconsultation"
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: t('form.teleconsultation') }}
                style={{ marginLeft: '50px' }}
              />
            </Box>
          </FormikStep>
          <FormikStep
            label={t('form.step2')}
            // validationSchema={validationSchemaStep2}
          >
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="info">
                Informations sur votre adresse pour permettre au patient de vous
                trouver facilement
              </Alert>
            </Snackbar>
            <Box paddingBottom={2}>
              <Field
                component={CountryDropdownComponent}
                name="country"
                style={{
                  marginLeft: '70px',
                  height: '55px',
                  width: '175px',
                  padding: '18.5px 14px',
                }}
              />
              <Field
                component={RegionDropdownComponent}
                name="region"
                style={{ marginRight: '25px', height: '55px' }}
              />
              <Field
                name="city"
                component={TextField}
                label="city"
                style={{
                  width: '110px',
                }}
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                variant="outlined"
                name="officeName"
                component={TextField}
                label="Hospital/Office name"
                style={{
                  marginLeft: '70px',
                  marginRight: '20px',
                  width: '200px',
                }}
              />
              <Field
                variant="outlined"
                name="postalCode"
                component={TextField}
                type="number"
                label="Postal Code"
                placeholder="00000"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                variant="outlined"
                name="address"
                component={TextField}
                label="Full Address"
                multiline
                style={{ marginLeft: '13%', width: '440px' }}
              />
            </Box>
          </FormikStep>
          <FormikStep
            label={t('form.step3')}
            // validationSchema={validationSchemaStep3}
          >
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="info">
                Informations professionnelles!
              </Alert>
            </Snackbar>
            <Box paddingBottom={3}>
              <Field
                variant="outlined"
                name="professionalID"
                component={TextField}
                label="Your professional ID"
                style={{
                  marginLeft: '70px',
                  marginRight: '25px',
                  width: '200px',
                }}
              />
              <Field
                variant="outlined"
                name="phoneNumber"
                component={TextField}
                type="number"
                label="Your professional phone number"
                placeholder="06666666"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                variant="outlined"
                name="minFee"
                type="number"
                component={TextField}
                label="Min Fees"
                style={{
                  marginLeft: '70px',
                  marginRight: '30px',
                  width: '85px',
                }}
              />
              <Field
                variant="outlined"
                name="maxFee"
                type="number"
                component={TextField}
                label="Max fees"
                style={{ width: '85px', marginRight: '30px' }}
              />
              <Field
                variant="outlined"
                name="minTeleFee"
                type="number"
                component={TextField}
                label="Teleconsultation Min Fees"
                style={{ marginRight: '35px', width: '90px' }}
              />
              <Field
                variant="outlined"
                name="maxTeleFee"
                type="number"
                component={TextField}
                label="Teleconsultation Max Fees"
                style={{ width: '90px' }}
              />
            </Box>
            <Box paddingBottom={2}>
              <div className="wrapper">
                <div className="select_size_spec one ">
                  <Field
                    name="speciality"
                    component={SelectComponent}
                    label="Specialities"
                    options={specialities}
                    // placeholder="Select your specialities"
                  />
                </div>
                <div className="two">
                  <Field
                    multiline
                    variant="outlined"
                    maxRows="5"
                    minRows="2"
                    name="description"
                    component={TextField}
                    label="Description"
                    style={{ width: '220px' }}
                  />
                </div>
              </div>
            </Box>
          </FormikStep>
          <FormikStep
            label="Operating days"
            // validationSchema={validationSchemaStep1}
          >
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="info">
                Vos horaires de travail
              </Alert>
            </Snackbar>
            <div className="center_element">
              <Box>
                <p>RDV Gap</p>
                <Field
                name="rdGap"
                component={ButtonGroup}
                type="button"
                variant="contained"
                buttons={rdvGaps}
              />
              </Box>
              <label>
                <Field
                  name="days"
                  type="checkbox"
                  component={Checkbox}
                  onChange={e => handleChange(e,setDisabledM)}
                  value="Monday"
                />
                Monday
              </label>
              <Field
                    name="morningTime"
                    component={TimePickerComponent}
                    format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                disabled={disabledM}
                  />
              {/* <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                selected={selectedtimeMM}
                onChange={(timemm, time) => handleChangeMM(timemm,time)}
                disabled={disabledM}
              /> */}
              <label className="text">And</label>
              <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                disabled={disabledM}
              />
            </div>
            <br />
            <div className="center_element">
            <label>
                <Field
                  name="days"
                  type="checkbox"
                  component={Checkbox}
                  onChange={e => handleChange(e,setDisabledT)}
                  value="Tuesday"
                />
                Tuesday
              </label>
              <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                selected={selectedtimeMAf}
                onChange={(timema) => setSelectedtimeMAf(timema)}
                disabled={disabledT}
              />
              <label className="text">And</label>
              <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                disabled={disabledT}
              />
            </div>
            <br />
            <div className="center_element">
            <label>
                <Field
                  name="days"
                  type="checkbox"
                  component={Checkbox}
                  onChange={e => handleChange(e,setDisabledW)}
                  value="Wednesday"
                />
                Wednesday
              </label>
              <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                disabled={disabledW}
              />
              <label className="text">And</label>
              <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                disabled={disabledW}
              />
            </div>
            <br />
            <div className="center_element">
            <label>
                <Field
                  name="days"
                  type="checkbox"
                  component={Checkbox}
                  onChange={e => handleChange(e,setDisabledTh)}
                  value="Thursday"
                />
                Thursday
              </label>
              <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                disabled={disabledTh}
              />
              <label className="text">And</label>
              <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                disabled={disabledTh}
              />
            </div>
            <br />
            <div className="center_element">
            <label>
                <Field
                  name="days"
                  type="checkbox"
                  component={Checkbox}
                  onChange={e => handleChange(e,setDisabledF)}
                  value="Friday"
                />
                Friday
              </label>
              <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                disabled={disabledF}
              />
              <label className="text">And</label>
              <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                disabled={disabledF}
              />
            </div>
            <br />
            <div className="center_element">
            <label>
                <Field
                  name="days"
                  type="checkbox"
                  component={Checkbox}
                  onChange={e => handleChange(e,setDisabledS)}
                  value="Saturday"
                />
                Saturday
              </label>
              <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                disabled={disabledS}
              />
              <label className="text">And</label>
              <TimePicker.RangePicker
                format="HH:mm"
                allowClear="true"
                disabledHours={() => [1, 2, 3]}
                className="timepicker"
                disabled={disabledS}
              />
            </div>
          </FormikStep>

          <FormikStep
            label={t('form.step4')}
            // validationSchema={validationSchemaStep5}
            // validationSchema={Yup.object({
            //   fee: Yup.mixed().when('teleconsultation', {
            //     is: true,
            //     then: Yup.number()
            //       .required()
            //       .min(
            //         1_000_000,
            //         'Because you said you are a millionaire you need to have 1 million'
            //       ),
            //     otherwise: Yup.number().required(),
            //   }),
            // })}
          >
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="info">
                Ces deux clés sont requis pour recevoir les frais de
                téléconsultation au cas où vous l'assurez.
                <br />
                Vous pouvez choisir de faire tourner le noeud IPFS soit su r
                votre machine locale ou sur un noeud distant.
              </Alert>
            </Snackbar>
            <Box paddingBottom={2}>
              <Field
                variant="outlined"
                fullWidth
                name="privateKey"
                type="number"
                component={TextField}
                label="Private Key"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                variant="outlined"
                fullWidth
                name="publicKey"
                type="number"
                component={TextField}
                label="Public Key"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                name="isDistantNode"
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: 'Se connecter un noeud distant' }}
                style={{ marginLeft: '50px' }}
              />
            </Box>
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}
const SelectComponent = ({
  field, // { name, value, onChange, onBlur }
  form: {
    touched,
    errors,
    isValid,
    handleBlur,
    handleChange,
    values,
    setFieldValue,
  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const [select, setSelect] = useState('');
  return (
    <Select
      {...field}
      {...props}
      onBlur={handleBlur(field.name)}
      value={select}
      onChange={(value) => {
        setFieldValue(field.name, value.label);
        setSelect(value); // calling custom onChangeText
      }}
    />
  );
};
const TimePickerComponent = ({
  field, // { name, value, onChange, onBlur }
  form: {
  touched,
  errors,
  isValid,
  handleBlur,
  handleChange,
  values,
  setFieldValue,
  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const [select, setSelect] = useState('');
  let arr=[];
  return (
  <TimePicker.RangePicker
      {...field}
      {...props}
      value={arr}
      onChange={(moment, time) => {
        arr=moment;
      let inf=time.toString();
      //setFieldValue(field.name, inf);
      console.log(time, inf);
       // calling custom onChangeText
      }}
  />
  );
};
const ButtonGroup = ({ buttons,
  field, // { name, value, onChange, onBlur }
  form: {
    touched,
    errors,
    isValid,
    handleBlur,
    handleChange,
    values,
    setFieldValue,
  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props }) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (event, id) => {
    setClickedId(id);
  };

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <Button
          {...field}
          {...props}
          key={i}
          name={field.name}
          onClick={(event) => {handleClick(event, i);
              setFieldValue(field.name, buttonLabel);}}
          variant={i === clickedId ? 'contained' : 'outlined'}
          color={i === clickedId ? 'primary' : 'default'}
        >
          {buttonLabel}
        </Button>
      ))}
    </>
  );
};
const CountryDropdownComponent = ({
  field, // { name, value, onChange, onBlur }
  form: {
    touched,
    errors,
    isValid,
    handleBlur,
    handleChange,
    values,
    setFieldValue,
  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const [country1, setCountry] = useState('');
  return (
    <CountryDropdown
      {...field}
      {...props}
      value={country1}
      onChange={(value) => {
        setFieldValue(field.name, value); // calling custom onChangeText
        setCountry(value);
        country = value;
        console.log(country);
      }}
    />
  );
};
const RegionDropdownComponent = ({
  field, // { name, value, onChange, onBlur }
  form: {
    touched,
    errors,
    isValid,
    handleBlur,
    handleChange,
    values,
    setFieldValue,
  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const [region, setRegion] = useState('');
  return (
    <RegionDropdown
      {...field}
      {...props}
      country={country}
      region={region}
      onChange={(value) => {
        setFieldValue(field.name, value); // calling custom onChangeText
        setRegion(value);
      }}
    />
  );
};

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<
    FormikStepProps
  >[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }
  const { t, i18n } = useTranslation();
  const history = useHistory();

  return (
    <div>
      {/* <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div> */}
      <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.keys(lngs).map((lng) => (
          <MenuItem value={lng}>{lngs[lng].nativeName}</MenuItem>
          ))}
        </Select>
      <Link to="/">Go back to home</Link>
      <Formik
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        validationSchema={currentChild.props.validationSchema}
        onSubmit={async (values, helpers) => {
          if (isLastStep()) {
            await props.onSubmit(values, helpers);
            //handleDoctorCreate(values);
            setCompleted(true);
            secretKey= values.password.replace(/[^a-zA-Z0-9]/g, "");
             model.insertDb(secretKey, values);
            // this.props.history.push('/moneyform');
            // <Redirect to="/agenda" />;
             await sleep(3000);

            localStorage.setItem('user','logged');
            localStorage.setItem('email', values.email);
            // let doc =model.getDoctor(secretKey);
          //while(doc==undefined)model.getDoctor(secretKey);
            // console.log(doc);
            history.push('/profile');
          } else {
            setStep((s) => s + 1);

            // the next line was not covered in the youtube video
            //
            // If you have multiple fields on the same step
            // we will see they show the validation error all at the same time after the first step!
            //
            // If you want to keep that behaviour, then, comment the next line :)
            // If you want the second/third/fourth/etc steps with the same behaviour
            //    as the first step regarding validation errors, then the next line is for you! =)
            //
            // In the example of the video, it doesn't make any difference, because we only
            //    have one field with validation in the second step :)
            helpers.setTouched({});
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <Stepper alternativeLabel activeStep={step}>
              {childrenArray.map((child, index) => (
                <Step
                  key={child.props.label}
                  completed={step > index || completed}
                >
                  <StepLabel>{child.props.label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {currentChild}
            <br />

            <Grid container spacing={2}>
              {step > 0 ? (
                <Grid item>
                  <Button
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    onClick={() => setStep((s) => s - 1)}
                  >
                    {t('form.back')}
                  </Button>
                </Grid>
              ) : null}
              <Grid item>
                <Button
                  startIcon={
                    isSubmitting ? <CircularProgress size="1rem" /> : null
                  }
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {isSubmitting
                    ? 'Submitting'
                    : isLastStep()
                    ? 'Submit'
                    : t('form.next')}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}
