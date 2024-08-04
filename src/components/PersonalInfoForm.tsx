import { Button, TextField } from "@mui/material";
import { Dispatch, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { accountcontext, actionList } from "../context/AcountProvider";
import { useAccount } from "../context/useAccount";

function PersonalInfoForm() {
  const navigate = useNavigate();
  const { account, dispatchAccount } = useAccount();
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { name, email, phoneNumber: number } = account?.info;

  console.log(account);

  return (
    <div className="flex h-full w-full flex-col py-7">
      <h1 className="h1">personal info</h1>
      <p className="subtitle">
        Please provide your name, email address, and phone number
      </p>
      <form
        className="mt-8 flex flex-col items-end gap-9"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/stage2-selectPlan");
        }}
      >
        <TextField
          required
          placeholder="e.g. danialmir"
          label="Name"
          value={name}
          onChange={(e) =>
            dispatchAccount({
              type: actionList.updateName,
              payload: e.target.value,
            })
          }
          className="w-full"
        />
        <TextField
          required
          placeholder="e.g. example@example.com"
          label="Email"
          value={email}
          className="w-full"
          onChange={(e) =>
            dispatchAccount({
              type: actionList.updateEmail,
              payload: e.target.value,
            })
          }
        />
        <TextField
          required
          placeholder="e.g. +1 234 567 890"
          label="Phone number"
          value={number}
          className="w-full"
          onChange={(e) =>
            dispatchAccount({
              type: actionList.updatePhoneNumber,
              payload: e.target.value,
            })
          }
        />
        <Button
          variant="contained"
          size="medium"
          color="MarineBlue"
          type="submit"
        >
          next step
        </Button>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
