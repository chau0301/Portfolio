import { FroalaOptions } from "froala-editor";

export interface ContentBlock {
  id: string;
  type: string;
  content: string;
}

export const configHeading: Partial<FroalaOptions> = {
  initOnClick: true,
  toolbarInline: true,
  charCounterCount: false,
  wordCounterCount: false,
  H1: true,
  placeholderText: "Write your heading",
  toolbarButtons: {
    moreText: {
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikeThrough",
        "fontFamily",
        "fontSize",
        "textColor",
        "clearFormatting",
        "align",
      ],
    },
  },
  events: {
    initialized: function () {},
  },
};

export const configText: Partial<FroalaOptions> = {
  initOnClick: true,
  toolbarInline: true,
  toolbarVisibleWithoutSelection: true,
  placeholderText: "Write something interesting...",
  charCounterCount: false,
  wordCounterCount: false,
  events: {
    initialized: function () {
      this.$tb[0].style.maxWidth = "400px";
    },
  },
};

export const configImage: Partial<FroalaOptions> = {};

export const configButton: Partial<FroalaOptions> = {};

export const configLink: Partial<FroalaOptions> = {
  linkStyles: {
    froalaLink1: "Link style 1",
    froalaLink2: "Link style 2",
  },
  linkMultipleStyles: false,
  linkAutoPrefix: "https://",
};

export const configCode: Partial<FroalaOptions> = {
  pluginsEnabled: ["codeView", "codeBeautifier"],
  toolbarButtons: ["html"],
  events: {
    initialized: function () {
      if (!this.codeView?.isActive()) {
        this.codeView?.toggle();
      }
    },
  },
};

export const configMarkdown: Partial<FroalaOptions> = {
  pluginsEnabled: ["markdown"],
  toolbarButtons: [],
  events: {
    initialized: function () {
      if (this.markdown && !this.markdown?.isEnabled()) {
        this.markdown?.toggle();
      }
    },
  },
};
