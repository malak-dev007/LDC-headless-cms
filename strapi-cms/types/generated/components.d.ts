import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBenefits extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    icon1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon5: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon6: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text1: Schema.Attribute.Text;
    text2: Schema.Attribute.Text;
    text3: Schema.Attribute.Text;
    text4: Schema.Attribute.Text;
    text5: Schema.Attribute.Text;
    text6: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
    title3: Schema.Attribute.String;
    title4: Schema.Attribute.String;
    title5: Schema.Attribute.String;
    title6: Schema.Attribute.String;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    company: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    firstName: Schema.Attribute.String;
    jobtitle: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    phoneNo: Schema.Attribute.String;
    privacyLink: Schema.Attribute.String;
    privacyText: Schema.Attribute.String;
    submitText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedEverythingApp extends Struct.ComponentSchema {
  collectionName: 'components_shared_everything_apps';
  info: {
    displayName: 'EverythingApp';
  };
  attributes: {
    icon1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    icon2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    secure: Schema.Attribute.String;
    support: Schema.Attribute.String;
    title: Schema.Attribute.String;
    uptime: Schema.Attribute.String;
    weekly: Schema.Attribute.String;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.String;
    answer1: Schema.Attribute.String;
    answer2: Schema.Attribute.String;
    answer3: Schema.Attribute.String;
    question: Schema.Attribute.String;
    question1: Schema.Attribute.String;
    question2: Schema.Attribute.String;
    question3: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.footerlink', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'Footer-column';
  };
  attributes: {
    badges: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    columns: Schema.Attribute.Component<'shared.footer', true>;
    connectTitle: Schema.Attribute.String;
    newsletterButton: Schema.Attribute.String;
    newsletterText: Schema.Attribute.String;
    social: Schema.Attribute.Component<'shared.social-links', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterlink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footerlinks';
  info: {
    displayName: 'Footerlink';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    CaseStudies: Schema.Attribute.String;
    Company: Schema.Attribute.String;
    Home: Schema.Attribute.String;
    Partners: Schema.Attribute.String;
    Resources: Schema.Attribute.String;
    SMBsServices: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    contactUsButton: Schema.Attribute.String;
    contactUsLinK: Schema.Attribute.String;
    discription: Schema.Attribute.Text;
    learnMoreLink: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'links';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPartners extends Struct.ComponentSchema {
  collectionName: 'components_shared_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedPlug extends Struct.ComponentSchema {
  collectionName: 'components_shared_plugs';
  info: {
    displayName: 'Plug';
  };
  attributes: {
    collectedLogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    explore: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedPuplicCloud extends Struct.ComponentSchema {
  collectionName: 'components_shared_puplic_clouds';
  info: {
    displayName: 'PublicCloud';
  };
  attributes: {
    Content1: Schema.Attribute.String;
    Content2: Schema.Attribute.String;
    description: Schema.Attribute.String;
    Image1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Image2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    Content: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'socialLinks';
    icon: 'emotionUnhappy';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSpecialistsHold extends Struct.ComponentSchema {
  collectionName: 'components_shared_specialists_holds';
  info: {
    displayName: 'SpecialistsHold';
  };
  attributes: {
    content1: Schema.Attribute.Text;
    content2: Schema.Attribute.Text;
    content3: Schema.Attribute.Text;
    content4: Schema.Attribute.Text;
    content5: Schema.Attribute.Text;
    description: Schema.Attribute.String;
    icon1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    icon5: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
    title3: Schema.Attribute.String;
    title4: Schema.Attribute.String;
    title5: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.benefits': SharedBenefits;
      'shared.contact': SharedContact;
      'shared.everything-app': SharedEverythingApp;
      'shared.faq': SharedFaq;
      'shared.footer': SharedFooter;
      'shared.footer-column': SharedFooterColumn;
      'shared.footerlink': SharedFooterlink;
      'shared.header': SharedHeader;
      'shared.hero': SharedHero;
      'shared.links': SharedLinks;
      'shared.media': SharedMedia;
      'shared.partners': SharedPartners;
      'shared.plug': SharedPlug;
      'shared.puplic-cloud': SharedPuplicCloud;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-links': SharedSocialLinks;
      'shared.specialists-hold': SharedSpecialistsHold;
    }
  }
}
