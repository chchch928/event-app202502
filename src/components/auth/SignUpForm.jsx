import React,{useState} from 'react';
import styles from './SignUpForm.module.scss';
import EmailInput from './EmailInput';
import VerificationInput from './VerificationInput';
import ProgressBar from '../common/ProgressBar';

const SignUpForm = () => {

    // 현재 어떤 스텝에 위치하고 있는지 
    const [step, setStep] = useState(1);

    // 다음 스텝으로 넘어가는 여부
    const [success, setSuccess] = useState();

    // 입력한 이메일 상태관리
    const [enteredEmail,setEnteredEmail] =useState();

    // 이메일 중복확인이 끝났을때 호출될 함수
    const emailSuccessHandler = (email) => {

        setEnteredEmail(email);
        setSuccess(true);
        // console.log('step1이 통과됨');

        setTimeout(() => {
            
            setStep(2);
            setSuccess(false);
        },1200)
        
    }

  return (
    <div className={styles.signupForm}>
      <div className={styles.formStepActive}>
        {step === 1 && <EmailInput onSuccess={emailSuccessHandler} />}
        {step === 2 &&   <VerificationInput email={enteredEmail} />}

        {/* <VerificationInput /> */}

            {success && < ProgressBar /> }
        
      

      </div>
    </div>
  );
};

export default SignUpForm;