import Image from 'next/image'

export default function DailyItems() {
  const items = [
    { name: 'Tomatohead', price: 1500, image: '/img/1.jpg', border: '#e95eff' },
    { name: 'Dark Voyager', price: 10000, image: '/img/2.jpg', border: '#e98d4b' },
    { name: 'Brawler', price: 500, image: '/img/3.jpg', border: '#37d1ff' },
    { name: 'Highrise Assault Trooper', price: 5000, image: '/img/4.jpg', border: '#87e339' },
    { name: 'Battle Hound', price: 1500, image: '/img/5.jpg', border: '#e98d4b' },
    { name: 'Scarlet Defender', price: 10000, image: '/img/6.jpg', border: '#87e339' },
    { name: 'Highland Warrior', price: 500, image: '/img/7.jpg', border: '#e95eff' },
    { name: 'Diecast', price: 5000, image: '/img/8.jpg', border: '#37d1ff' }
  ]

  return (
    <div id="menu2" className="tab-pane fade">
      <div className="container">
        <div className="daily_items">
          <div className="left_panel">
            <div className="title_bar">
              <span>Daily Items</span>
            </div>
            <div className="main_bg">
              <div className="daily_items_list">
                <ul>
                  {items.map((item, index) => (
                    <li key={index} style={{ border: `2px solid ${item.border}` }}>
                      <Image 
                        src={item.image} 
                        alt="render" 
                        width={200} 
                        height={200}
                      />
                      <div className="daily_items_info">
                        {item.name}<br />
                        <span>
                          <Image 
                            src="/img/bucks.png" 
                            alt="coins" 
                            width={16} 
                            height={16}
                          />
                          {item.price.toLocaleString()}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}