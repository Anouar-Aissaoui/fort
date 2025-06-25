import Image from 'next/image'

interface PackagesModalProps {
  show: boolean
  onHide: () => void
  onSelectPackage: (amount: number) => void
}

export default function PackagesModal({ show, onHide, onSelectPackage }: PackagesModalProps) {
  const packages = [
    { amount: 1000, image: '/img/box4.png' },
    { amount: 2800, image: '/img/box1.png' },
    { amount: 7500, image: '/img/box2.png' },
    { amount: 13500, image: '/img/box3.png' }
  ]

  if (!show) return null

  return (
    <div className="modal fade show" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Choose your packet</h4>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            <ul className="packages">
              {packages.map((pkg, index) => (
                <li 
                  key={index}
                  className="soundclick" 
                  onClick={() => onSelectPackage(pkg.amount)}
                >
                  <div className="packet_list_price">Free</div>
                  <Image 
                    src={pkg.image} 
                    alt="packet" 
                    width={150} 
                    height={150}
                  />
                  <div className="packet_list_coins">{pkg.amount.toLocaleString()}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}