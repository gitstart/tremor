import BaseAnimationTimingProps from "components/chart-elements/common/BaseAnimationTimingProps";
import { Color } from "../../../lib";

type FixedProps = {
  eventType: "dot" | "category" | "bar" | "slice" | "bubble";
  categoryClicked: string;
};

type BaseEventProps = FixedProps & {
  [key: string]: number | string;
};

export type EventProps = BaseEventProps | null | undefined;

interface BaseSparkChartProps
  extends BaseAnimationTimingProps,
    React.HTMLAttributes<HTMLDivElement> {
  data: any[];
  categories: string[];
  index: string;
  colors?: Color[];
  noDataText?: string;
}

export default BaseSparkChartProps;
