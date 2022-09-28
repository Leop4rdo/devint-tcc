import React, { useEffect } from "react"
import { emailConfirm } from "services/auth.service"

const EmailConfirmPage: React.FC = () => {

  useEffect(() => {
    // requisição na service de auth para confirmar email
    {/*} const EmailConfirm = emailConfirm

       axios
        .get("/email-confirm")
  .then(response => setUsers(response.data)); */}
  }, []
  )

  return (
    <div>
      <span>Confirmando Email...</span>
    </div>
  )
}



export default EmailConfirmPage