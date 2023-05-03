const Label = ({label, placeholder, type}: {label: string, placeholder: string, type: string}) => {
    return (
        <div className="flex flex-col">
          <label className="text-center text-secondary text-4xl font-fuzzy-bubbles border-b-2 border-tertiary mb-5 mt-5 m-auto w-30">
              {label}
          </label>

          {label === 'Game' && <select className="text-dark text-4xl text-center font-latobold shadow-md shadow-light">
              <option className="text-center text-primary bg-tertiary" value="chess">Chess</option>
              <option className="text-center text-primary bg-tertiary" value="shogi">Shogi</option>
            </select>}
        
          {label !== 'Game' && <input className="text-center text-dark text-2xl font-latobold shadow-md shadow-light w-80% m-auto rounded-lg"
              type={type}
              placeholder={placeholder}
              autoComplete={'off'}
          />}
        </div>
    );
}
 
export default Label;