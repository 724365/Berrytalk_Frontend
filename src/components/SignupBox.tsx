import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.scss';

const SignupBox = () => {
    return (
        <div className='signup-wrap'>
            <span className='login-title'><span>베리</span>톡 회원가입</span>
            <input type="text" className='input' placeholder='사용할 닉네임을 입력해주세요. (6글자 내)' />
            <input type="email" className='input' placeholder='사용할 이메일을 입력해주세요.' />
            <input type="password" className='input' placeholder='사용할 비밀번호를 입력해주세요. (8자 이상)' />
            <input type="password" className='input' placeholder='사용할 비밀번호를 재입력해주세요. ' />
            <button>SIGN UP</button>
            <div className='line' />
            <span className='first-login-text'>이미 계정이 있으신가요? <Link to={'/signin'} className='link'>로그인하기</Link></span>
        </div>
    );
};

export default SignupBox;