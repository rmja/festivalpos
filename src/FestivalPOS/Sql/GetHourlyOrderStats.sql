--DECLARE @Year int = 2019
--DECLARE @TerminalId int = null
--DECLARE @PointOfSaleId int = null

SELECT
	 MIN(o.Created) EarliestOrderCreated
	,COUNT(o.Id) Orders
	,SUM(o.Total) Total
FROM
	Orders o
WHERE
	o.AmountDue = 0
	AND DATEPART(year, o.Created) = @Year
	AND (@TerminalId IS NULL OR o.TerminalId = @TerminalId)
	AND (@PointOfSaleId IS NULL OR o.PointOfSaleId = @PointOfSaleId)
GROUP BY
	 DATEPART(year, o.Created)
	,DATEPART(month, o.Created)
	,DATEPART(day, o.Created)
	,DATEPART(hour, o.Created)
ORDER BY
	EarliestOrderCreated