import { Controller } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import useDatePresnce from "Hooks/UseDatePresence";
import ListSubheader from "@mui/material/ListSubheader";
import moment from "moment-timezone";

import "./Input.style.scss";
export const InputSelect = ({ control, name, data, errors }) => {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ ref, field }) => (
          <Select
            inputRef={ref}
            value={field.value}
            className="input-select"
            onChange={(val) => {
              field.onChange(val);
            }}
          >
            {data.map((item, index) => (
              <MenuItem key={index} value={item._id || item.value}>
                {item.label || item.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />

      <p className="select-input-error">{errors[name]?.message}</p>
    </div>
  );
};

export const InputText = ({ register, name, errors, icon, placeholder }) => {
  return (
    <div className="text-input">
      <label className="text-input-label" icon={icon} htmlFor="">
        <input
          {...register(name)}
          className="input-text"
          type="text"
          placeholder={placeholder}
        />
      </label>
      <p className="text-input-error">{errors}</p>
    </div>
  );
};
export const InputDate = ({ control, name, errors, icon, placeholder }) => {
  return (
    <div className="text-input">
      <label className="text-input-label" icon={icon} htmlFor="">
        <Controller
          control={control} 
          name={name}
          render={({ ref, field }) => (
            <input
              value={
                moment(field.value).startOf("days").format("yyyy-MM-DD") || ""
              }
              className="input-text"
              type="date"
              onChange={(val) => {
                field.onChange(val);
              }}
              min={moment().startOf("days").format("yyyy-MM-DD")}
              placeholder={placeholder}
            />
          )}
        />
      </label>
      <p className="text-input-error">{errors}</p>
    </div>
  );
};
export const InputSelectLabel = ({
  control,
  name,
  data,
  errors,
  placeholder,
}) => {
  return (
    <div className="select-input-group">
      <Controller
        control={control}
        name={name}
        render={({ ref, field }) => (
          <Select
            inputRef={ref}
            value={field.value||"-1"}
            className="input-select"
            onChange={(val) => {
              field.onChange(val);
            }}
          >
            <MenuItem className="item" value="-1">
              {placeholder}
            </MenuItem>
            {data.map((item, index) => (
              <MenuItem key={index} value={item._id || item.value}>
                {item.label || item.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />

      <p className="select-input-error">{errors}</p>
    </div>
  );
};
export const InputSelectFilter = ({ control, name, data, errors }) => {
  const x = 35;
  return (
    <div className="select-input-group">
      <Controller
        control={control}
        name={name}
        render={({ ref, field }) => (
          <Select
            inputRef={ref}
            value={field.value}
            className="input-select filter "
            style={{ height: `${x}px` }}
            onChange={(val) => {
              field.onChange(val);
            }}
          >
            <MenuItem className="item" value="all">
              All
            </MenuItem>
            {data.map((item, index) => (
              <MenuItem className="item" key={index} value={item._id}>
                {item.label || item.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />

      <p className="select-input-error">{errors}</p>
    </div>
  );
};
export const InputSelectMois = ({ control, name }) => {
  const { list, nameOfManth } = useDatePresnce();
  const x = 35;
  return (
    <div className="select-input-group">
      <Controller
        control={control}
        name={name}
        render={({ ref, field }) => (
          <Select
            inputRef={ref}
            value={field.value}
            className="input-select"
            style={{ height: `${x}px` }}
            onChange={(val) => {
              field.onChange(val);
            }}
          >
            {list.map((date, index) =>
              date.map((d, _) => {
                if (_ === 0) {
                  return <ListSubheader>{d.split("-")[0]}</ListSubheader>;
                } else {
                  return (
                    <MenuItem key={_} value={d}>
                      {nameOfManth(d.split("-")[1])}
                    </MenuItem>
                  );
                }
              })
            )}
          </Select>
        )}
      />
    </div>
  );
};
