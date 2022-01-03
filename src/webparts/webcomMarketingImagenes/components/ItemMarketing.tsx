import * as React from "react";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActions,
  IDocumentCardPreviewProps,
} from "@fluentui/react/lib/DocumentCard";
import { ImageFit } from "@fluentui/react/lib/Image";

export interface IItemMarketingProps {
  item: any;
}

export const ItemMarketing: React.FunctionComponent<IItemMarketingProps> = (
  props: React.PropsWithChildren<IItemMarketingProps>
) => {
  const i = props.item;

  const onActionClick = (action: string, ev: React.SyntheticEvent<HTMLElement>): void => {
    console.log(`You clicked the ${action} action`);
    ev.stopPropagation();
    ev.preventDefault();
  };
  const documentCardActions = [
    {
      iconProps: { iconName: 'Share' },
      onClick: onActionClick.bind(this, 'share'),
      ariaLabel: 'share action',
    },
    {
      iconProps: { iconName: 'Pin' },
      onClick: onActionClick.bind(this, 'pin'),
      ariaLabel: 'pin action',
    },
    {
      iconProps: { iconName: 'Ringer' },
      onClick: onActionClick.bind(this, 'notifications'),
      ariaLabel: 'notifications action',
    },
  ];

  return (
    <>
      <DocumentCard
        aria-label="Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago."
        onClickHref={i.FileRef}
        type={1}
        style={{maxWidth:250, minWidth:250}}
      >
        {/* <DocumentCardPreview {...previewProps} /> */}
        <DocumentCardTitle
          title={i.FileLeafRef}
          shouldTruncate
        />
        {/* <DocumentCardActivity activity="Created a few minutes ago" people={DocumentCardActivityPeople} /> */}
        <DocumentCardActions actions={documentCardActions}/>
      </DocumentCard>
    </>
  );
};
