import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { AuthContext } from '../Context/AuthContext'

const Auth = () => {

    const authContext = useContext(AuthContext)

    const loginH = () => {
        authContext.login()
    }

  return (
    <div>
      <Card>
        <Button onClick={loginH}>
            برای ورود کلیک کنید
        </Button>
      </Card>
    </div>
  )
}

export default Auth