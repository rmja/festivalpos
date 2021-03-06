﻿--DECLARE @PeriodStart DateTime = '2019-01-01'
--DECLARE @PeriodEnd DateTime = '2020-01-01'
--DECLARE @TerminalId int = null
--DECLARE @PointOfSaleId int = null
--DECLARE @Kind int = 4
--DECLARE @HourOffset int = 2

SELECT
	@Kind AS Kind
	,MIN(DATEADD(hour, @HourOffset, o.Created)) EarliestOrderCreated
	,p.Method
	,COUNT(p.Id) Payments
	,SUM(p.Amount) Total
FROM
	Orders o
JOIN
	Payments p ON o.Id = p.OrderId
WHERE
	o.IsDeleted = 0
	AND o.AmountDue = 0
	AND DATEADD(hour, @HourOffset, o.Created) >= @PeriodStart AND DATEADD(hour, @HourOffset, o.Created) < @PeriodEnd
	AND (@TerminalId IS NULL OR o.TerminalId = @TerminalId)
	AND (@PointOfSaleId IS NULL OR o.PointOfSaleId = @PointOfSaleId)
GROUP BY
	 DATEPART(year, DATEADD(hour, @HourOffset, o.Created))
	,CASE WHEN @Kind >= 2 THEN DATEPART(month, DATEADD(hour, @HourOffset, o.Created)) END
	,CASE WHEN @Kind >= 3 THEN DATEPART(day, DATEADD(hour, @HourOffset, o.Created)) END
	,CASE WHEN @Kind >= 4 THEN DATEPART(hour, DATEADD(hour, @HourOffset, o.Created)) END
	,p.Method
ORDER BY
	 EarliestOrderCreated
	,Method