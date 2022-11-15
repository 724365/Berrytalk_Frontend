import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Login.scss';

const Login = () => {
    return (
        <div className='login-wrap'>
            <span className='login-title'><span>베리</span>톡 로그인하기</span>
            <input type="text" className='input' placeholder='이메일을 입력해주세요.' />
            <input type="password" className='input' placeholder='비밀번호를 입력해주세요.' />
            <button>LOGIN</button>
            <div className='line' />
            <span className='first-login-text'>베리톡이 처음이신가요? <Link to={'/signup'} className='link'>회원가입하기</Link></span>
        </div>
    );
};

export default Login;