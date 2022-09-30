import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import * as authService from "services/auth.service"

const EmailConfirmPage: React.FC = () => {
  const { email } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    authService.emailConfirm(email ?? "")
      .then((res) => {
        if (res.hasError)
          alert('Um erro inesperado aconteceu ao confirmar o E-mail!')

        navigate('/')
      })
  }, [email])

  return (
    <div>
      <span>Confirmando Email...</span>
    </div>
  )
}



export default EmailConfirmPage