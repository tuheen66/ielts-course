export interface Data {
  
  slug: string;
  id: number;
  title: string;
  description: string; // contains HTML
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Media[];
  checklist: ChecklistItem[];
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  delivery_method: string;
}

export interface Features {
  features: string;
  name: string;
  description?: string;
  bg_color?: string;
  order_idx: number;
  values: Values[];
}

export interface Values{
icon:string;
id:string;
subtitle:string;
title:string
}

interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface CtaText {
  name: string;
  value: string;
}

interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values:
    | Offer[]
    | Instructor[]
    | Feature[]
    | GroupJoinEngagementItem[]
    | Pointer[]
    | AboutItem[]
    | FeatureExplanation[]
    | Testimonial[]
    | FAQItem[];
}

// Supporting interfaces for Section values

interface Offer {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

export interface Instructor {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

interface Feature {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

interface GroupJoinEngagementItem {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

interface Pointer {
  color: string;
  icon: string;
  id: string;
  text: string;
}

interface AboutItem {
  description: string;
  icon: string;
  id: string;
  title: string;
}

interface FeatureExplanation {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

interface Testimonial {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

interface FAQItem {
  answer: string;
  id: string;
  question: string;
}
