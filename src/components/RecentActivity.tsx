import Image from 'next/image'

export default function RecentActivity() {
  const activities = [
    { name: 'ElNoob', amount: 13500, platform: 'fab fa-windows' },
    { name: 'Pottato', amount: 2800, platform: 'fab fa-apple' },
    { name: 'Pottato', amount: 2800, platform: 'fab fa-xbox' },
    { name: 'Pottato', amount: 7500, platform: 'fab fa-playstation' }
  ]

  return (
    <div id="home" className="tab-pane fade">
      <div className="container">
        <div className="recent_bg">
          <div className="title_bar">
            <span>Recent activity</span>
          </div>
          <div className="main_bg">
            <div className="row">
              {activities.map((activity, index) => (
                <div key={index} className="col-sm-6">
                  <div className="recent_block-add">
                    <div className="recent_block">
                      <div className="row">
                        <div className="recent_block_avatar">
                          <Image 
                            src="/img/recentavatar.png" 
                            alt="render" 
                            width={50} 
                            height={50}
                          />
                        </div>
                        <div className="recent_block_name">
                          Name<br />
                          <span>{activity.name}</span>
                        </div>
                        <div className="recent_block_bucks">
                          V-Bucks<br />
                          <Image 
                            src="/img/bucks.png" 
                            alt="bucks" 
                            width={32} 
                            height={32}
                          />
                          <span>{activity.amount}</span>
                        </div>
                        <div className="recent_block_platform">
                          Platform<br />
                          <span><i className={activity.platform}></i></span>
                        </div>
                        <div className="stepper" data-value="0">
                          <div className="step active">
                            <div className="circle">1</div>
                            <div className="label">Generator</div>
                          </div>
                          <div className="divider"></div>
                          <div className="step">
                            <div className="circle">2</div>
                            <div className="label">Verification</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}