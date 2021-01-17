interface PropsEntry {
  fetchWeather: (...args: any[]) => void;
  errorMes?: string;
}

const Header = (props: PropsEntry) => {
  const handleChange = (e: string) => {
    if (e.length === 5) {
      let zipCode = parseInt(e);
      props.fetchWeather(zipCode);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center m-auto text-center m-4 p-4 ">
      <h1 className="">Weather App</h1>
      <p>Enter your zip code below to see your weather.</p>
      <input
        type="number"
        className="form-control w-75"
        placeholder="ZIP Code"
        onChange={(e) => handleChange(e.target.value)}
      />
      <div
        className={`m-2 alert alert-danger ${props.errorMes ? '' : 'd-none'} `}
        style={{ color: '#EE4B6A' }}
      >
        {props.errorMes}
      </div>
    </div>
  );
};

export default Header;
