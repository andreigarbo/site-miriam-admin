import type { AnalyticsDataEntry } from '@/types/analytics';

function isAnalyticsDataEntry(obj: Object): obj is AnalyticsDataEntry {
  if (obj == undefined) {
    return false;
  }

  if (!('continentCode' in obj)) {
    return false;
  }

  if (!('countryName' in obj)) {
    return false;
  }

  if (!('cityName' in obj)) {
    return false;
  }

  if (!('visits' in obj)) {
    return false;
  }
  return true;
}

export { isAnalyticsDataEntry };
