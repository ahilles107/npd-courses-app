import * as React from "react";
import { Typography } from "@material-ui/core";
import "./style.scss";
import { LessonInterface } from "../../containers/SingleLesson/interfaces";
import Jumbotron from "../Jumbotron";
import DoneIcon from "@material-ui/icons/Done";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import SuccessButton from "../Buttons/SuccessButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import List from "../List/List";
import Attachment from "../Attachment";

const CourseLesson = ({
  item: {
    title,
    description,
    embed_code,
    completed,
    module: {
      course: { title: courseTitle }
    },
    attachments
  },
  onComplete,
  completeLoading
}: {
  item: LessonInterface;
  onComplete: (isCompleted: boolean) => void;
  completeLoading: boolean;
}) => {
  const { t } = useTranslation();

  const doneIcon = completed ? (
    <DoneAllIcon className={"left-icon"} />
  ) : (
    <DoneIcon className={"left-icon"} />
  );

  const icon = completeLoading ? (
    <CircularProgress size={18} color={"inherit"} className={"left-icon"} />
  ) : (
    doneIcon
  );

  const completeButtonView = completed ? (
    <div>
      {icon}
      {t("Completed")}
    </div>
  ) : (
    <div>
      {icon}
      {t("Mark as completed")}
    </div>
  );

  const buttonVariant = completed ? "contained" : "outlined";
  const onCompleteButtonClick = () => {
    onComplete(!completed);
  };

  const attachmentsView = attachments.length > 0 && (
    <div className="attachments">
      <Typography variant={"h6"}>Pliki do pobrania:</Typography>

      <List component={Attachment} items={attachments} />
    </div>
  );

  return (
    <div className={"course-lesson"}>
      <Jumbotron title={title} subtitle={courseTitle} />

      <div
        className={"embed-code"}
        dangerouslySetInnerHTML={createEmbedCode(embed_code)}
      />

      <div className={"description"}>
        <Typography variant={"subtitle1"}>
          <div dangerouslySetInnerHTML={createEmbedCode(description)} />
        </Typography>
      </div>

      {attachmentsView}

      <div className={"complete-button"}>
        <SuccessButton
          onClick={onCompleteButtonClick}
          text={completeButtonView}
          disabled={completeLoading}
          variant={buttonVariant}
        />
      </div>
    </div>
  );
};

export default CourseLesson;

function createEmbedCode(embedCode: string): { __html: string } {
  return { __html: embedCode };
}
