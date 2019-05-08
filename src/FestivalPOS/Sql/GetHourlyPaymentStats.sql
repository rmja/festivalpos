--DECLARE @Year int = 2019
--DECLARE @TerminalId int = null
--DECLARE @PointOfSaleId int = null

SELECT
	 MIN(o.Created) EarliestOrderCreated
	,p.Method
	,COUNT(p.Id) Payments
	,SUM(p.Amount) Total
FROM
	Orders o
JOIN
	Payments p ON o.Id = p.OrderId
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
	,p.Method
ORDER BY
	 EarliestOrderCreated
	,Method