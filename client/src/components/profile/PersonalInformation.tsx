import React from "react";
import { FormattedMessage } from "react-intl";
import { User } from "@/interfaces/types";
import { usePersonnelInformation } from "@/hooks/profile/usePersonalInformation";

type TPersonnelInformation = {
  user: User | null;
};
const PersonnelInformation = (props: TPersonnelInformation) => {
  const { user } = props;
  const { userInformationMapping } = usePersonnelInformation({ user });

  if (!user || !userInformationMapping) return null;

  return (
    <React.Fragment>
      <h1 className="text-[20px] mb-[10px] text-primary-400">
        <FormattedMessage id="profile.PersonnelInformation.title" />
      </h1>
      {userInformationMapping}
    </React.Fragment>
  );
};
export default PersonnelInformation;
