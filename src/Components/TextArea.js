const  TextArea= ({
    label,
    value,
    placeholder,
    handleChange,
    required,
    error
  }) => {
    return (
      <div className="flex clmn aic">
        <div className="flex jcsb w-280 aic">
          <label htmlFor={label}>{label} {required && <span className="red">*</span> }</label>
          <textarea
            name={label}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            required={required}
            className={error && error.length>0 ? "erreur" : ""}
          />
        </div>
        {error && <small className="m-t-10 red">{error.map(err=>err.msg)}</small>}

      </div>
    )
  }
  
  export default TextArea