import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Wrap } from './styled';
import { AppState } from '../../store/';
import { connect } from 'react-redux';
import { setSecondStep } from '../../store/secondStep/actions';
import { FirstStepForm, SecondStepForm } from '../../common/types';
import StyleWrapper from '../../components/StyledWrapper';
import { H3, H2, LightText, PrimaryText } from '../../components/Typography';
import subjects from '../../constants/subjects';
import { Input } from '../../components/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CustomStepper from '../../components/Stepper';
import { theme } from '../../common/theme';
import { Hint } from '../../components/Hint';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: '95%',
      color: 'green',
    },
    // '& .MuiInputBase-input': {
    //   color: 'red',
    // },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

type Props = {
  secondStep: SecondStepForm;
  firstStep: FirstStepForm;
  setSecondStep: typeof setSecondStep;
};

const SecondStep: FC<Props> = ({ setSecondStep, secondStep, firstStep }) => {
  const router = useRouter();
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSecondStep(event.target.value as string);
  };
  return (
    <Wrap>
      <CustomStepper activeStep={1} />
      <StyleWrapper margin="0 0 2rem 0">
        <H3>Jaký předmět chcete učit?</H3>
      </StyleWrapper>
      <PrimaryText size="1rem">
        Pro{' '}
        {firstStep.chooseDegreeState.map((button, idx) => {
          if (button.checked) {
            return button.label;
          }
        })}
      </PrimaryText>
      <StyleWrapper margin="0 0 1rem 0">
        <LightText>Vyberte si prosím pouze jeden předmět.</LightText>
      </StyleWrapper>
      <Hint hintText="Chcete učit více předmětů?" />
      <Hint hintText="Zjistěte, jaké předměty můžete s vaším vzděláním vyučovat" />
      <FormControl className={classes.formControl} variant="outlined">
        {/* <InputLabel id="demo-simple-select-label">Vyberte předmět</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={secondStep}
          onChange={handleChange}
        >
          {subjects.map((subject) => (
            <MenuItem value={subject}>{subject}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <StyleWrapper textAlign="center">
        <Input
          value="Pokračovat   >"
          type="button"
          padding="1rem 2rem"
          margin="2.5rem 0 1rem 0"
          bgColor={theme.color.primary}
          onClick={() => {
            router.push('/vyber-vzdelani');
          }}
        />
      </StyleWrapper>
      <StyleWrapper textAlign="center">
        <Hint hintText="Nevíte si rady s výběrem předmětu? Napište nám" />
      </StyleWrapper>
    </Wrap>
  );
};

const mapStateToProps = (state: AppState) => ({
  secondStep: state.secondStep,
  firstStep: state.firstStep,
});

export default connect(mapStateToProps, { setSecondStep })(SecondStep);
