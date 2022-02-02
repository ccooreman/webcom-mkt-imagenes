import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp/presets/all";

import * as strings from "WebcomMarketingImagenesWebPartStrings";
import { MarketingApp, IMarketingAppProps } from "./components/MarketingApp";

export interface IWebcomMarketingImagenesWebPartProps {
  description: string;
}

export default class WebcomMarketingImagenesWebPart extends BaseClientSideWebPart<IWebcomMarketingImagenesWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IMarketingAppProps> =
      React.createElement(MarketingApp, {});

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return super.onInit().then((_) => {
      // other init code may be present

      sp.setup({
        spfxContext: this.context,
      });
    });
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
