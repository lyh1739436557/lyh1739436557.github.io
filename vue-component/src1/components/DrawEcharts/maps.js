import alertSituationAnalysisDrawerLeftTable2Row1Ring from './alertSituationAnalysisDrawerLeftTable2Row1Ring'
import alertSituationAnalysisDrawerLeftTable2Row2Year from './alertSituationAnalysisDrawerLeftTable2Row2Year'
import alertSituationAnalysisDrawerLeftTable2Row2Hour from './alertSituationAnalysisDrawerLeftTable2Row2Hour'
import alertSituationAnalysisDrawerLeftTable2Row3History from './alertSituationAnalysisDrawerLeftTable2Row3History'
import alertSituationAnalysisDrawerLeftTable2Row3Organization from './alertSituationAnalysisDrawerLeftTable2Row3Organization'
import alertSituationAnalysisDrawerLeftTable2Row4Linek from './alertSituationAnalysisDrawerLeftTable2Row4Linek'
import incidencePredictiveDrawerLeftFutureHour24 from './incidencePredictiveDrawerLeftFutureHour24'
import incidencePredictiveDrawerLeftYearAndPrediction from './incidencePredictiveDrawerLeftYearAndPrediction'
import incidencePredictiveDrawerLeftOganization3d from './incidencePredictiveDrawerLeftOganization3d'
import incidencePredictiveDrawerLeftOganizationCase from './incidencePredictiveDrawerLeftOganizationCase'
import incidencePredictiveDrawerLeftWarningPredictionWeather from './incidencePredictiveDrawerLeftWarningPredictionWeather'

const echartsType = [
  'alert-situation-analysis-drawer-left-table2-row1-ring',
  'alert-situation-analysis-drawer-left-table2-row2-year',
  'alert-situation-analysis-drawer-left-table2-row2-hour',
  'alert-situation-analysis-drawer-left-table2-row3-history',
  'alert-situation-analysis-drawer-left-table2-row3-organization',
  'alert-situation-analysis-drawer-left-table2-row4-linek',
  'incidence-predictive-drawer-left-future-hour24',
  'incidence-predictive-drawer-left-year-and-prediction',
  'incidence-predictive-drawer-left-oganization3d',
  'incidence-predictive-drawer-left-oganization-case',
  'incidence-predictive-drawer-left-warning-prediction-weather'
]

const echartsOption = {
  'alert-situation-analysis-drawer-left-table2-row1-ring': alertSituationAnalysisDrawerLeftTable2Row1Ring,
  'alert-situation-analysis-drawer-left-table2-row2-year': alertSituationAnalysisDrawerLeftTable2Row2Year,
  'alert-situation-analysis-drawer-left-table2-row2-hour': alertSituationAnalysisDrawerLeftTable2Row2Hour,
  'alert-situation-analysis-drawer-left-table2-row3-history': alertSituationAnalysisDrawerLeftTable2Row3History,
  'alert-situation-analysis-drawer-left-table2-row3-organization': alertSituationAnalysisDrawerLeftTable2Row3Organization,
  'alert-situation-analysis-drawer-left-table2-row4-linek': alertSituationAnalysisDrawerLeftTable2Row4Linek,

  'incidence-predictive-drawer-left-future-hour24': incidencePredictiveDrawerLeftFutureHour24,
  'incidence-predictive-drawer-left-year-and-prediction': incidencePredictiveDrawerLeftYearAndPrediction,
  'incidence-predictive-drawer-left-oganization3d': incidencePredictiveDrawerLeftOganization3d,
  'incidence-predictive-drawer-left-oganization-case': incidencePredictiveDrawerLeftOganizationCase,
  'incidence-predictive-drawer-left-warning-prediction-weather': incidencePredictiveDrawerLeftWarningPredictionWeather
}

export default {
  echartsType,
  echartsOption
}
