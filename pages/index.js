import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [value, setValue] = useState("1");
  const formRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const urlParams = new URLSearchParams(formData);
    const newUrl = `?${urlParams}`;
    router.push({ pathname: "", query: urlParams }, newUrl, { shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <form id="form" ref={formRef}>
      <label>
        Enter any number that starts with a 1:
        <input
          list="numbers"
          type="number"
          inputMode="decimal"
          name="number"
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <datalist id="numbers">
          <option value="1" />
          <option value="11" />
          <option value="12" />
          <option value="13" />
          <option value="14" />
          <option value="15" />
          <option value="111" />
        </datalist>
      </label>
    </form>
  );
}
