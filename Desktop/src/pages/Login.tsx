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
  InputLabel,
  ButtonGroup,
} from '@material-ui/core';
import { TimePicker } from 'antd';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { Link } from 'react-router-dom';
import {  CheckboxWithLabel, TextField } from 'formik-material-ui';
import Select from 'react-select';
import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import * as Yup from 'yup';
import Multiselect from 'multiselect-react-dropdown';
// import knex from '../../database.js';

const knex = require('../../database');

// const sleep = (time) => new Promise((acc) => setTimeout(acc, time));
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
    .min(8, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  gender: Yup.string().required('Must choose at least one option.'),
  secretQuest: Yup.string().required('Must choose at least one question.'),
});
const validationSchemaStep4 = Yup.object().shape({
  card_nbr: Yup.number()
    .required()
    .min(15, 'Must be at least 15 digits')
    .max(16, 'Must be less than 16 digits'),
  expDate: Yup.string()
    .typeError('Not a valid expiration date. Example: MM/YY')
    .max(5, 'Not a valid expiration date. Example: MM/YY')
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      'Not a valid expiration date. Example: MM/YY'
    )
    .required('Expiration date is required'),
});
const specialities: string[] = [
  'Gastro',
  'Pneumo',
  'Psychiatrie',
  'Orl',
  'Dermato',
  'Ophtalmo',
  'Généraliste',
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
const rdvGaps = [
  { value: '15', label: '15min' },
  { value: '20', label: '20mins' },
  { value: '25', label: '25mins' },
  { value: '30', label: '30mins' },
  { value: '35', label: '35mins' },
  { value: '40', label: '40mins' },
  { value: '45', label: '45mins' },
  { value: '60', label: '1hour' },
];
const handleDoctorCreate = (a: string, b: string, c: string) => {
  knex('doctors')
    .insert({
      // insert new record, a book
      firstName: a,
      lastName: b,
      password: c,
    })
    // eslint-disable-next-line promise/always-return
    .then(() => {
      // Send a success message in response
      // eslint-disable-next-line no-console
      console.log('AN object created!!');
    })
    .catch((err: any) => {
      // Send a error message in response
      // eslint-disable-next-line no-console
      console.log(err);
    });
  knex
    .select('*')
    .from('doctors')
    // eslint-disable-next-line no-console
    .then((data: any) => console.log('data:', data))
    // eslint-disable-next-line no-console
    .catch((err: any) => console.log(err));
};
export default function Home() {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [flag1, setFlag1] = React.useState(true);
  const [flag2, setFlag2] = React.useState(true);
  const handleClick1 = () => {
    setFlag1(!flag1);
    setFlag2(true);
  };
  const handleClick2 = () => {
    setFlag2(!flag2);
    setFlag1(true);
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
            teleconsultation: false,
            fee: 0,
            description: '',
            password: '',
            confirmPassword: '',
            gender: '',
            acceptTerms: false,
            address: '',
            city: '',
            secretQuest: '',
            rdvGap: '',
            country: '',
            officeName: '',
            specialities: '',
            professionalID: '',
            cardNbr: '',
            expDate: '',
            postalCode: '',
            cvc: '',
            billingAddress: '',
            phoneNumber: '',
            dobDay: '',
            dobMonth: '',
            dobYear: '',
            feeTeleconsultation: 0,
            workDay: false,
          }}
          onSubmit={async (values) => {
            // await sleep(3000);
            console.log('values', values, values.firstName);
            // console.log('firstName', values.firstName);
          }}
        >
          <FormikStep
            label={t('form.step1')}
            // validationSchema={validationSchemaStep1}
          >
            <Box paddingBottom={2}>
              <Field
                name="firstName"
                component={TextField}
                label={t('form.firstName')}
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
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                name="password"
                component={TextField}
                label={t('form.password')}
                type="password"
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
              <Field
                fullWidth
                variant="outlined"
                name="secretQuest"
                component={Select}
                placeholder={t('form.secretQuest')}
                label={t('form.secretQuest')}
                options={secretQuests}
              />
            </Box>
            <Field name="gender" component={ButtonGroup} placeholder="Gender">
              <Button
                variant="contained"
                value="male"
                onClick={handleClick1}
                color={flag1 ? 'default' : 'primary'}
              >
                {t('form.male')}
              </Button>
              <Button
                variant="contained"
                value="female"
                onClick={handleClick2}
                color={flag2 ? 'default' : 'secondary'}
              >
                {t('form.female')}
              </Button>
            </Field>
            <Box paddingBottom={2}>
              <Field
                name="dobDay"
                component={TextField}
                label={t('form.day')}
                type="number"
                placeholder="DD"
                style={{ width: '70px' }}
              />
              <Field
                name="dobMonth"
                component={TextField}
                label={t('form.month')}
                style={{ marginLeft: '50px', width: '70px' }}
                type="number"
                placeholder="MM"
              />
              <Field
                name="dobYear"
                component={TextField}
                label={t('form.year')}
                style={{ marginLeft: '50px', width: '100px' }}
                type="number"
                placeholder="YYYY"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                name="teleconsultation"
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: t('form.teleconsultation') }}
              />
            </Box>
          </FormikStep>
          <FormikStep label={t('form.step2')}>
            <Box paddingBottom={2}>
              <Field
                variant="outlined"
                name="officeName"
                component={TextField}
                label="Hospital/Office name"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                name="country"
                component={CountryDropdown}
                value={country}
                onChange={(val: React.SetStateAction<string>) =>
                  setCountry(val)
                }
                style={{ height: '50px' }}
              />
              <Field
                name="region"
                component={RegionDropdown}
                country={country}
                value={region}
                onChange={(val: React.SetStateAction<string>) => setRegion(val)}
                style={{ height: '50px' }}
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                variant="outlined"
                name="address"
                component={TextField}
                label="Full Address"
                multiline
              />
            </Box>
          </FormikStep>
          <FormikStep label={t('form.step3')}>
            <Box paddingBottom={2}>
              <Field
                variant="outlined"
                name="professionalID"
                component={TextField}
                label="Your professional ID"
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
                name="fee"
                type="number"
                component={TextField}
                label="Fees"
                style={{ width: '80px' }}
              />
              <Field
                variant="outlined"
                name="feeTeleconsultation"
                type="number"
                component={TextField}
                label="Teleconsultation fees"
                style={{ marginLeft: '50px', width: '80px' }}
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                fullWidth
                name="specialities"
                component={Multiselect}
                label="Specialities"
                isObject={false}
                options={specialities}
                placeholder="Select your specialities"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                multiline
                fullWidth
                variant="outlined"
                maxRows="5"
                minRows="2"
                name="description"
                component={TextField}
                label="Description"
              />
            </Box>
          </FormikStep>
           <FormikStep label="Operating days">
             <div className="center_element">
           <Checkbox
            
          >
           monday
          </Checkbox>
           <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
          
            />
          <label className="text">And</label>
            <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
            />
            </div>
           <br/>
           <div className="center_element">
           <Checkbox
            
          >
          Tuesday
          </Checkbox>
           <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
          
            />
          <label className="text">And</label>
            <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
            />
            </div>
            <br/>
            <div className="center_element">
           <Checkbox
            
          >
          Wednesday
          </Checkbox>
           <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
          
            />
          <label className="text">And</label>
            <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
            />
            </div>
            <br/>
            <div className="center_element">
           <Checkbox
            
          >
          Thuesday
          </Checkbox>
           <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
          
            />
          <label className="text">And</label>
            <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
            />
            </div>
            <br/>
            <div className="center_element">
           <Checkbox
            
          >
          Friday
          </Checkbox>
           <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
          
            />
          <label className="text">And</label>
            <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
            />
            </div>
            <br/>
            <div className="center_element">
           <Checkbox
            
          >
          Sunday
          </Checkbox>
           <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
          
            />
          <label className="text">And</label>
            <TimePicker.RangePicker
            format="HH:mm"
            allowClear="true"
            disabledHours={() => [1, 2, 3]}
            className="timepicker"
            />
            </div>





            {/*<Box>
              <Field
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: 'Monday' }}
                style={{ width: '80px' }}
              />
              <Field
                name="workDay"
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: 'Tuesday' }}
                style={{ width: '80px' }}
              />
              <Field
                name="workDay"
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: 'Wednesday' }}
                style={{ width: '80px' }}
              />
            </Box>
            <Box>
              <Field
                name="workDay"
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: 'Thrusday' }}
                style={{ width: '80px' }}
              />
              <Field
                name="workDay"
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: 'Friday' }}
                style={{ width: '80px' }}
              />
              <Field
                name="workDay"
                type="checkbox"
                component={CheckboxWithLabel}
                Label={{ label: 'Saturday' }}
                style={{ width: '80px' }}
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                variant="outlined"
                name="rdvGap"
                component={Select}
                placeholder="Choose a rdv duration"
                label="Choose a rdv duration"
                options={rdvGaps}
                style={{ width: '80px' }}
              />
            </Box>*/}
          </FormikStep> 
          
          <FormikStep
            label={t('form.step4')}
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
            <Box paddingBottom={2}>
              <Field
                variant="outlined"
                fullWidth
                name="cardNbr"
                type="number"
                component={TextField}
                label="Bank card number"
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                size="medium"
                name="cvc"
                component={TextField}
                type="number"
                label="Security Code"
                style={{ width: 300 }}
                variant="outlined"
              />
              <Field
                variant="outlined"
                name="expDate"
                component={TextField}
                placeholder="MM/YY"
                label="Expiry Date"
                style={{ marginLeft: '100px' }}
              />
            </Box>
            <Box paddingBottom={2}>
              <Field
                variant="outlined"
                name="billingAddress"
                component={TextField}
                label="Billing Address"
                style={{ width: 400 }}
                multiline
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
          </FormikStep>
        </FormikStepper>
      </CardContent>
    </Card>
  );
}

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
  return (
    <div>
      <div>
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
      </div>
      <Link to="/">Go back to home</Link>
      <Formik
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        validationSchema={currentChild.props.validationSchema}
        onSubmit={async (values, helpers) => {
          if (isLastStep()) {
            await props.onSubmit(values, helpers);
            handleDoctorCreate(
              values.firstName,
              values.lastName,
              values.password
            );
            setCompleted(true);
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
