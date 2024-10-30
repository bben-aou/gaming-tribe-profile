import { User } from "@/interfaces/types";
import { FormattedMessage, useIntl } from "react-intl";

type TAboutMe = {
  user: User | null;
};

const AboutMe = (props: TAboutMe) => {
  const { user } = props;
  const intl = useIntl();
  console.log(user);
  return (
    <div>
      <h1 className="text-[20px] mb-[10px] text-primary-400">
        {intl.formatMessage({ id: "profile.aboutMe.title" })}
      </h1>
      <p className="text-light-100 min-h-[7.5rem]">
        <FormattedMessage id="profile.aboutMe.paragraph" />
      </p>
    </div>
  );
};
export default AboutMe;
