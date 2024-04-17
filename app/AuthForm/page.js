import Styles from './AuthForm.module.css';
import { AuthForm } from '../components/AuthForm/AuthForm';

export default function Auth() {
  return (
    <div className={Styles['container_auth']}>
      <div className={Styles['authform']}>
        <AuthForm />
      </div>
    </div >
  )
}





