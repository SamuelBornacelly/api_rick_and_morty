
const LocationInfo = ({ location }) => {
  return (
    <article className="locationInfo">
      <h2 className="locationInfo__h2">{location?.name}</h2>
      <ul className="locationInfo__ul">
        <li className="locationInfo__li">
          <span className="locationInfo__span">Type:</span><span className="locationInfo__span_2">{location?.type}</span>
          </li>
        <li className="locationInfo__li">
          <span className="locationInfo__span">Dimension:</span><span className="locationInfo__span_2">{location?.dimension || 'unknown'}</span>
          </li>
        <li className="locationInfo__li">
          <span className="locationInfo__span">Population:</span><span className="locationInfo__span_2">{location?.residents.length}</span>
          </li>
      </ul>
    </article>
  )
}

export default LocationInfo