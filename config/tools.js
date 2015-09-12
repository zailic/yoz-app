/**
 * Merges the properties of two objects together.
 * It returns the resulting array.
 */
function mergeConfigs(destCfg, srcCfg) {
	for (var p in srcCfg) {
		try {
			if (srcCfg[p].constructor == Object) {
				destCfg[p] = mergeConfigs(destCfg[p], srcCfg[p]);
			} else {
				destCfg[p] = srcCfg[p];
			}
		} catch (e) {
			destCfg[p] = srcCfg[p];
		}
	}
	return destCfg;
}