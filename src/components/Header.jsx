import SearchInput from "./SearchInPut";

import Toggle from "./Toggle";
export default function Header() {
  return (
    <>
      <div className="flex pt-5">
        <SearchInput />
        <Toggle />
      </div>
    </>
  );
}
